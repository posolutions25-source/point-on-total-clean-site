
export interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  message: string;
}

export interface EstimateRequest {
  type: string;
  details: string;
}
