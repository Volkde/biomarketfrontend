import { axiosInstance } from "shared/api/axiosInstance";
import { convertToSearchParams } from "shared/utils/convertToSearchParams";
import { Delivery } from "types/Delivery";

export interface Params {
  deliveryId: number;
}

export type Result = Delivery;

export async function fetchGetDeliveryById(params: Params): Promise<Result> {
  const response = await axiosInstance.get<Result>(
    `/delivery/${params.deliveryId}`,
    {
      params: convertToSearchParams(params)
    }
  );

  return response.data;
}
