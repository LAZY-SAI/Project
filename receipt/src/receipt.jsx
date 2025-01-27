import { useState } from "react";

function Detail() {
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState([]);

  function handleuser(event) {
    setUser(event.target.value);
  }

  function addItems() {
    const newItem = document.getElementById("item-input").value;
    const newValue = document.getElementById("price").value;
    document.getElementById("price").value = "";
    document.getElementById("item-input").value = "";

    if (newItem && newValue) {
      setItems((i) => [...i, newItem]);
      setPrices((p) => [...p, parseFloat(newValue)]); // Convert price to number
    } else {
      alert("Please fill out both service and price before adding!");
    }
  }

  function removeItems(index) {
    setItems(items.filter((_, i) => i !== index));
    setPrices(prices.filter((_, i) => i !== index));
  }

  // Calculate the total of all the prices
  const total = prices.reduce((acc, price) => acc + price, 0);

  
  const handlePrint = () => {
   
    
  };

  return (
    <>
      <div className="details-container">
        <div className="receipt-user">Receipt For: {user}</div>
        <form action="">
          <fieldset>
            <label>Name:</label>
            <input
              type="text"
              value={user}
              onChange={handleuser}
              name="userID"
              placeholder="userID"
              id="person"
              required
            ></input>
          </fieldset>

          <fieldset className="date">
            <label>From:</label>
            <input type="date" required></input>

            <label>TO:</label>
            <input type="date" required></input>
          </fieldset>

          <fieldset>
            <label>Description:</label>
            <input type="textarea" placeholder="About" required></input>
          </fieldset>
        </form>
        <hr />
        <div className="input-section">
          <input type="text" id="item-input" placeholder="service" required />
          <input type="number" id="price" placeholder="price" required />
          <button onClick={addItems}>add</button>
        </div>
        <hr />
        <div className="fees-container">
          <div className="list">
            <ul>
              {items.map((item, index) => (
                <li key={index} onClick={() => removeItems(index)}>
                  {item} 
                </li>
              ))}
            </ul>
          </div>
          <div className="value">
            <ul>
              {prices.map((price, index) => (
                <li key={index} onClick={() => removeItems(index)}>
                  = Rs {price}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Display the total */}
        <div className="total">
          <h3>Total: Rs {total.toFixed(2)}</h3> 
          <button onClick={handlePrint} id="Print">Print Receipt</button>
        </div>

        
        
      </div>
    
      <p>`Note: To remove the item from list just click on it  {":)"}`</p>
    </>
  );
}

export default Detail;
