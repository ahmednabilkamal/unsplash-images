import { useAppContext } from "../../context/AppContext";

function SearchInput() {
  const { setSearch } = useAppContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      search: HTMLInputElement;
    };

    const searchValue = formElements.search.value;
    if (!searchValue) {
      return;
    } else {
      setSearch(searchValue);
    }
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Search for images"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export { SearchInput };
