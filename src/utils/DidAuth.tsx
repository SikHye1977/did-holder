import axios from 'axios';
import { AGENT_URL } from '@env';

export async function encrypt_msg(PlainText:string, issuer_verkey : string, holder_verkey : string ) {
  const url = `http://${AGENT_URL}/wallet/encrypt`;

  const requestBody = {
    plaintext: PlainText,
    recipient_verkey: holder_verkey,
    sender_verkey: holder_verkey,
  };

  console.log("Request URL:", url);
  console.log("Request Body:", requestBody);

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    console.log("Encryption Success:", response.data);
    return response.data;
  } catch (error) {
    console.error("Encryption Failed:", error);
    throw error;
  }
}


export async function decrypt_msg(ciphertext : string) {
  const url = `http://${AGENT_URL}/wallet/decrypt`;

  const requestBody = {
    packed_message : ciphertext
  }
  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    console.log("Decryption Success : ", response.data);
    return response.data;
  } catch(error) {
    console.error("Decryption Failed:", error);
    throw error;
  }
}