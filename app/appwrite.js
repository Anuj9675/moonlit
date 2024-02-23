import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65d858500d2f1fcf8725'); 

export const account = new Account(client);
export { ID } from 'appwrite';
