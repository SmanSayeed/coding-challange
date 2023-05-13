import { useState, useEffect } from 'react';
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import clientPromise, { mongo_db_name } from '@/lib/mongodb/mongodb';

interface Document {
  _id: ObjectId;
  // Add your document fields here
}

interface HookResult {
  data: Document[];
  isLoading: boolean;
  error: Error | null;
  createDocument: (document: Document) => void;
  updateDocument: (id: ObjectId, updatedFields: Partial<Document>) => void;
  deleteDocument: (id: ObjectId) => void;
}

const useMongoDB = (
  collectionName: string
): HookResult => {
  const [data, setData] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const client = await clientPromise;
        const db: Db = client.db(mongo_db_name);
        const collection: Collection<Document> = db.collection(collectionName);
        const result = await collection.find().toArray();
        setData(result);
      } catch (err:any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ collectionName]);

  const createDocument = async (document: Document): Promise<void> => {
    try {
        const client = await clientPromise;
      const db: Db = client.db(mongo_db_name);
      const collection: Collection<Document> = db.collection(collectionName);
      await collection.insertOne(document);
      setData([...data, document]);
    } catch (err:any) {
      setError(err);
    }
  };

  const updateDocument = async (
    id: ObjectId,
    updatedFields: Partial<Document>
  ): Promise<void> => {
    try {
        const client = await clientPromise;
      const db: Db = client.db(mongo_db_name);
      const collection: Collection<Document> = db.collection(collectionName);
      await collection.updateOne({ _id: id }, { $set: updatedFields });
      const updatedData = data.map((document) => {
        if (document._id.equals(id)) {
          return { ...document, ...updatedFields };
        }
        return document;
      });
      setData(updatedData);
    } catch (err:any) {
      setError(err);
    }
  };

  const deleteDocument = async (id: ObjectId): Promise<void> => {
    try {
        const client = await clientPromise;
      const db: Db = client.db(mongo_db_name);
      const collection: Collection<Document> = db.collection(collectionName);
      await collection.deleteOne({ _id: id });
      const updatedData = data.filter((document) => !document._id.equals(id));
      setData(updatedData);
    } catch (err:any) {
      setError(err);
    }
  };

  return { data, isLoading, error, createDocument, updateDocument, deleteDocument };
};

export default useMongoDB;