const API_URL = 'https://dummyjson.com/';

export interface ApiResponse {
  [key: string]: unknown;
}

export interface ApiError {
  message: string;
}

//post
const post = async (
  url: string,
  data: object,
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as ApiError).message || 'API request failed');
  }
};

//get
const get = async (url: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}${url}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as ApiError).message || 'API request failed');
  }
};

export {post, get};
