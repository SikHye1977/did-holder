import axios from 'axios';
import { AGENT_URL } from '@env';

// 25.01.22
// DID 생성 및 Ledger 등록을 위한 기능들

export async function createDid() {
  const url = `http://${AGENT_URL}/wallet/did/create`; // ACA-py 서버 URL
  const requestBody = {
    method: 'sov', // DID 메소드 (sov)
    options: {
      key_type: 'ed25519', // 키 타입 (ed25519)
    },
  };

  try {
    // POST 요청 보내기
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    // 결과 출력
    console.log('DID 생성 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('DID 생성 실패:', error);
    throw error;
  }
}

export async function registerDid(did: string, verkey: string, alias: string) {
  const url = `http://${AGENT_URL}/ledger/register-nym`;

  try {
    const config = {
      params: {
        did: did,
        verkey: verkey,
        alias: alias,
        create_transaction_for_endorser: false, // Boolean 값
      },
      headers: {
        'accept': 'application/json',
      },
    };

    // 디버깅용 요청 URL 출력
    console.log('Axios 요청 URL:', url, config.params);

    // 요청 보내기
    const response = await axios.post(url, null, config);

    console.log('DID 등록 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('DID 등록 실패:', error);
    throw error;
  }
}
