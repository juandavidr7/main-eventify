import apiClient from "./api";

export const getEventsRequest = (params = {}) => {
    return apiClient.get('events-utils/eventos/', { params });
};

export const getEventByIdRequest = (id) => {
    return apiClient.get(`events-utils/eventos/${id}/`);
};

export const createEventRequest = (eventData) => {
    return apiClient.post('events-utils/eventos/', eventData);
};

export const getFeaturedEventsRequest = () => {
    return apiClient.get('events-utils/eventos/featured/', {
    params: {
            page_size: limit,
            ordering: '-fecha_inicio',
        },
    });
};

