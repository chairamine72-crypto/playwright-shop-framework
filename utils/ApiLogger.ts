export class ApiLogger {
  static logRequest(method: string, url: string, payload?: unknown): void {
    console.log('\n========== API REQUEST ==========');

    console.log(`Method: ${method}`);
    console.log(`URL: ${url}`);

    if (payload) {
      console.log('Payload:', JSON.stringify(payload, null, 2));
    }

    console.log('===============================\n');
  }

  static logResponse(status: number, body?: unknown): void {
    console.log('\n========== API RESPONSE ==========');

    console.log(`Status: ${status}`);

    if (body) {
      console.log('Body:', JSON.stringify(body, null, 2));
    }

    console.log('================================\n');
  }
}
