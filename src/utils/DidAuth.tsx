import axios from 'axios';
import { AGENT_URL } from '@env';

export async function signJsonLD(verificationMethod : string, verkey : string) {
  const url = `http://${AGENT_URL}/jsonld/sign`;

  const requestBody = {
    doc: {
      credential: {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          {
            "id": "@id",
            "degree": {
              "@id": "https://schema.org/degree",
              "@type": "@json"
            },
            "name": {
              "@id": "https://schema.org/name",
              "@type": "@json"
            }
          }
        ],
        "id": "http://example.edu/credentials/3732",
        "type": ["VerifiableCredential"],
        "issuer": "did:sov:KLhbiXBn6w5ECu35jioecA",
        "issuanceDate": "2025-01-20T00:00:00Z",
        "credentialSubject": {
          "id": "did:sov:WWz5tHCE7EqvfGr6uJZgq3",
          "name": "John Doe",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science in Computer Science"
          }
        }
      },
      options: {
        challenge: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        domain: "http://example.com",
        proofPurpose: "assertionMethod",
        type: "Ed25519Signature2018",
        verificationMethod: verificationMethod 
      }
    },
    verkey: verkey
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('JSON-LD 서명 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('JSON-LD 서명 실패:', error);
    throw error;
  }
}
