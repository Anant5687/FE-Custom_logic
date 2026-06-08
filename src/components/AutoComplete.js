import { useMemo, useState } from "react";
import useDeBounce from "../hooks/useDebounce";
import { MOCK_DATA } from "../utils/constants";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const { query, loading } = useDeBounce(search, 1000);

  const data = useMemo(() => {
    if (!query) return [];

    return MOCK_DATA?.filter((ele) =>
      ele?.name?.toLowerCase()?.includes(query?.toLowerCase()),
    );
  }, [query]);

  return (
    <>
      <input
        placeholder="Search technologies..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading....</h1>}

      {data?.length ? (
        data?.map((ele) => <p key={ele?.name}>{ele?.name} </p>)
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
};

export default AutoComplete;
