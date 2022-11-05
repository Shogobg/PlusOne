import { useQuery } from "@tanstack/react-query";

const BadWords = ({ checkText = "" }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [checkText],
    queryFn: async () => {
      return fetch(process.env.REACT_APP_API_URL + "/api/v1/checkWords", {
        method: "POST",
        body: checkText,
      }).then((res) => res.json());
    },
  });

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <>An error has occured: " + {error}</>;
  }

  if (data.length > 0) return <>Non-english words: {data.join(" ")}</>;
  else return <></>;
};

export default BadWords;
