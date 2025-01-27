import { useState } from "react";

function Form() {

  const [fees, setFees] = useState({
    fee_1: "",
    fee_2: "",
    fee_3: "",
    fee_4: "",
    fee_5: "",
    fee_6: "",
    fee_7: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFees((prevFees) => ({
      ...prevFees,
      [name]: parseFloat(value) || 0, // Ensure it's a number
    }));
  };

  // Calculate the total sum
  const total = Object.values(fees).reduce((sum, fee) => sum + fee, 0);

function addNew(){
  const table = document.getElementById("mtable");
  const row = table.insertRow(-1)
  const cell1 = row.insertCell(0)
  const cell2 = row.insertCell(1)
  const cell3 = row.insertCell(3)
  cell1.innerHTML = "<input>";
  cell2.innerHTML = "<input>";
  cell3.innerHTML = "<input>";
}
  return (
    <>
      <div className="header">
        <fieldset>
          <legend>Rgistration NO:</legend>
          <input type="number" id="NUm" required />
        </fieldset>
        <fieldset>
          <legend>Student</legend>
          <input type="text" name="username" id="username" required />
        </fieldset>
        <fieldset>
          <legend>parents</legend>
          <input type="text" name="p_name" id="parent" required />
        </fieldset>
        <fieldset>
          <legend>Class</legend>
          <input type="text" id="Class" required />
        </fieldset>
      </div>
      <div className="receipt">
        <table id="mytable">
          <thead>
            <tr>
              <th>List No</th>
              <th>Bus Fee</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Monthly Fee</td>
              <td>
                <input
                  type="number"
                  name="fee_1"
                  value={fees.fee_1}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Admission Fee</td>
              <td>
                <input
                  type="number"
                  name="fee_2"
                  value={fees.fee_2}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>REGISTRATION FEE</td>
              <td>
                <input
                  type="number"
                  name="fee_3"
                  value={fees.fee_3}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>ART MATERIAL</td>
              <td>
                <input
                  type="number"
                  name="fee_4"
                  value={fees.fee_4}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>TRANSPORT</td>
              <td>
                <input
                  type="number"
                  name="fee_5"
                  value={fees.fee_5}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>BOOKS</td>
              <td>
                <input
                  type="number"
                  name="fee_6"
                  value={fees.fee_6}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>UNIFORM</td>
              <td>
                <input
                  type="number"
                  name="fee_7"
                  value={fees.fee_7}
                  onChange={handleChange}
                />
              </td>
              <td>
                
              </td>
            </tr>
            <tr>
                
            </tr> 
          </tbody>
        </table>
        <h3> <b>Total: { `Rs ${total}`} </b></h3> 
      </div>
      {/* <button onClick={addNew}>
        Add
      </button> */}
    </>
  );
}

export default Form;
