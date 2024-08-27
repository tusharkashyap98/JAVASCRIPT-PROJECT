import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
          <CountriesList/>

      </main>
    </>
  );
};

export default App;
