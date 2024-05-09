import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /*axios
      .get("www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => console.log(res.data?.drinks))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  */
    axios({
      method: "GET",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
    }).then((res) => setData(res.data?.drinks));
  }, []);
  return (
    <>
      <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="input">search your favorite cocktail</label>
            <input type="text" name="name" id="input" />
          </div>
        </form>
      </section>
      <section className="section">
        <h2 className="section-title">Cocktails</h2>
        <div className="cocktails-center">
          {data
            ? data.map(
                ({
                  idDrink,
                  strDrinkThumb,
                  strDrink,
                  strGlass,
                  strAlcoholic,
                }) => {
                  return (
                    <article key={idDrink} className="cocktail">
                      <div className="img-container">
                        <img src={strDrinkThumb} alt={strDrink} />
                      </div>
                      <div className="cocktail-footer">
                        <h3>{strDrink}</h3>
                        <h4>{strGlass}</h4>
                        <p>{strAlcoholic}</p>
                        <Link
                          className="btn btn-primary btn-details"
                          to={`/details/${idDrink}`}
                        >
                          details
                        </Link>
                      </div>
                    </article>
                  );
                }
              )
            : "No data!"}
        </div>
        {loading && <div className="loader"></div>}
      </section>
    </>
  );
}

export default Home;
