import { instance } from "@/apis/instance/instance";
import { useQuery } from "react-query";

const getWork = async () => {
  const data = await instance.get("article/recent");
  return { data };
};

export const useGetWorkQuery = () => {
  const { data } = useQuery({
    queryKey: ["getWork"],
    queryFn: () => getWork(),
  });

  return [data];
};
