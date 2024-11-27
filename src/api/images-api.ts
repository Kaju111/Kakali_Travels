import API from ".";

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


export async function fetchSearch()
{
  const response = await API.post("packages/search");
  return response.data
}



// export async function fetchFilters(): Promise<IFilterData> {
//   const response = await API.post("EmployeeManagement/master");
//   return response.data;
// }
