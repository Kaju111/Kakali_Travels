import API from ".";
import { ContactFormValues } from "../utils/types";

export async function fetchSliderImage() {
  const response = await API.get("slider-images");
  return response.data;
}

export async function fetchGalleryImages(){
  const response = await API.get("gallery-images");
  return response.data;
}

export async function fetchAmenities()
{
  const response = await API.get("amenities");
  return response.data;
}

export async function fetchLocations()
{
  const response = await API.get("locations");
  return response.data
}

export async function fetchTopDestination()
{
  const response = await API.get("top-destinations");
  return response.data;
}

export const sendContactForm = async (data: ContactFormValues) => {
    const response = await API.post('contact-form', data);
    return response.data;
};

export const fetchSearch = async (data: any) => {
  const response = await API.post("packages/search",data);
  return response.data
}