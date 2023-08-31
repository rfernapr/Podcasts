export const httpCall = async <T>(url: string, request: RequestInit): Promise<T> => {
    const response = await fetch(url, request);
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return await response.json();
}