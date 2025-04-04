import axios from "axios";
import { API_URL,REDIRECT_URL} from "./url"; 

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


const ENDPOINTS = {
    authLogin: "auth/local",
    users: "users",
    products: "products",
    orders: "orders",
    categories: "categories",
    custom: "custom",
    customAuth: "custom-auth",
    sessions: "sessions",
    orderItems: "order-items",
    printjob: "print-jobs"
};

const getJwtTokenFromStorage = () => localStorage.getItem("jwt_token");

const setJwtTokenInStorage = (token) =>
    localStorage.setItem("jwt_token", token);

const apiRequest = async (method, endpoint, data = null, customHeaders = {}) => {
    try {
        let authToken = `Bearer ${API_TOKEN}`;
        const jwtToken = getJwtTokenFromStorage();
        if (jwtToken) {
            authToken = `Bearer ${jwtToken}`;
        }
        const config = {
            method,
            url: `${API_URL}${endpoint}`,
            headers: {
                Authorization: authToken,
                "ngrok-skip-browser-warning": "true",
                Accept: "image/*",
                ...customHeaders,
            },
            data,
        };
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.warn("JWT token expired or invalid. Clearing token and retrying...");
            localStorage.removeItem("jwt_token"); 
            return apiRequest(method, endpoint, data, customHeaders);
        }
        console.log(API_TOKEN);
console.log("test successful");

        console.error(`Error during ${method.toUpperCase()} request to ${endpoint}:`, error);
        throw error;
    }
};

export const getJwtToken = async(identifier, password) => {
    try {
        const response = await axios.post(`${API_URL}${ENDPOINTS.customAuth}`, {
            identifier,
            password,
        });
        const jwt = response.data.token;
        const rac = response.data.loginDetails;
        setJwtTokenInStorage(jwt);
        const userid = await getLoggedInUser("id");
        const racWithUser = {
            data: {
                ...rac,
                "users_permissions_users": userid,
            },
        };
        await postUserSession(racWithUser);
        return jwt;
    } catch (error) {
        console.error("Error fetching JWT token:", error);
        throw error;
    }
};

export const getUserRole = async (userId) => {
        const user = await apiRequest("get", `users/${userId}?populate=role`);
        return user.role.name || null;
};


export const getProductCount = () => apiRequest("get", `${ENDPOINTS.custom}/count-products`);
export const getOrdersCount = () => apiRequest("get", `${ENDPOINTS.custom}/count-orders`);
export const getTotalRevenue = () => apiRequest("get", `${ENDPOINTS.custom}/total-revenue`);
export const getLoggedInUser = async(field = null) => {
    const user = await apiRequest("get", `${ENDPOINTS.users}/me`);
    localStorage.setItem("logged_user", JSON.stringify(user));
    return field ? user[field] : user;
};
export const updateLoggedInUser = async(data) => {
    const userid = await getLoggedInUser("id");
    const updatedUser = await apiRequest("put", `${ENDPOINTS.users}/${userid}`, data);
    localStorage.setItem("logged_user", JSON.stringify(updatedUser));
    return updatedUser;
};
export const getUserCounts = () => apiRequest("get", `${ENDPOINTS.users}/count`);
export const getProducts = () => apiRequest("get", `${ENDPOINTS.products}?populate=*`);
export const getProduct = (documentId) => apiRequest("get", `${ENDPOINTS.products}/${documentId}?populate=*`);  
export const createProduct = (productData) => apiRequest("post", `${ENDPOINTS.products}`, productData);
export const uploadImage = (formData) => apiRequest("post", "upload", formData);
export const updateProduct = (id, data) => apiRequest("put", `${ENDPOINTS.products}/${id}`, data);
export const deleteProduct = (id) => apiRequest("delete", `${ENDPOINTS.products}/${id}`);
export const getCategories = () => apiRequest("get", `${ENDPOINTS.categories}`);
export const postUserSession = (data) => apiRequest("post", `${ENDPOINTS.sessions}`, data);
export const getOrders = () => apiRequest("get", `${ENDPOINTS.orders}?populate=*`);
export const getOrderItem = () => apiRequest("get", `${ENDPOINTS.orderItems}?populate=*`);
export const updateStatusForOrder = (id, data) => apiRequest("put", `${ENDPOINTS.orders}/${id}`, data);
export const getUserDetails = (documentId) =>  apiRequest("get", `${ENDPOINTS.users}?documentId="${documentId}"&populate=*`);
export const getOrderItemDetails = (documentId) =>  apiRequest("get", `${ENDPOINTS.orderItems}?documentId="${documentId}"&populate=*`);
export const getPrintJobs = () => apiRequest("get", `${ENDPOINTS.printjob}?populate=*`);
export const getOrderDetails = (documentId) =>  apiRequest("get", `${ENDPOINTS.orders}?documentId="${documentId}"&populate=*`);
export const createOrder = (data) => apiRequest("post", `${ENDPOINTS.orders}`, data);
export const createOrderItem = (data) => apiRequest("post", `${ENDPOINTS.orderItems}`, data);
export const updateProductStatusForSelected = ({ productIds, statuss }) => {
    const requests = productIds.map((id) => {
        return apiRequest("put", `${ENDPOINTS.products}/${id}`, {
            data: { statuss },
        });
    });
    return { success: true };
};
export const initiateGoogleLogin = () => {
    const client_id = '966821918093-gkunor3no4k2mki0n2q93vf7gprcsqf6.apps.googleusercontent.com';
    const redirect_uri = `${REDIRECT_URL}`;
    const scope = 'email profile';
    const state = 'xyz123';
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${encodeURIComponent(
      redirect_uri
    )}&response_type=code&scope=${encodeURIComponent(scope)}&state=${state}`;
  };
  