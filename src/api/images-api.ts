import API from ".";

export async function fetchSliderImage() {
  const response = await API.get("slider-images");
  return response.data;
}

// export async function fetchFilters(): Promise<IFilterData> {
//   const response = await API.post("EmployeeManagement/master");
//   return response.data;
// }
