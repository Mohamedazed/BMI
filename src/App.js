import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [vbmi, setVbmi] = useState(null);
  const [Image, setImage] = useState(null);
  const [c,setc] = useState(false)
  const calculateBMI = () => {
    setVbmi(weight / (height * height));
    setc(true)
    switch (true) {
      case vbmi < 18.5:
        setImage('bmi 1.jpeg');
        break;
      case vbmi >= 18.5 && vbmi <= 24.9:
        setImage('bmi 2.jpeg');
        break;
      case vbmi >= 25 && vbmi <= 29.9:
        setImage('bmi 3.jpeg');
        break;
      case vbmi >= 30 && vbmi <= 34.9:
        setImage('bmi 4.jpeg');
        break;
      case vbmi >= 35:
        setImage('bmi 5.jpeg');
        break;
      default:
        setImage(null);
    }
  };

  return (
    <div className="container border border-success p-5 my-5 shadow w-50">
      <form>
        <div class="col-auto">
          <label className='text-success'><b>Weight :</b></label>
          <div class="input-group mb-2">
          <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="form-control"
              placeholder="Enter weight"
            />
            <div class="input-group-prepend">
              <div class="input-group-text  bg-success text-light">Kg</div>
          </div>
          </div>
        </div>

        <div class="col-auto">
          <label className='text-success'><b>Height :</b> </label>
          <div class="input-group mb-2">   
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="form-control"
            placeholder="Enter height"
          />
          <div class="input-group-prepend">
              <div class="input-group-text bg-success text-light">m</div>
          </div>
        </div>
        </div>

        <button type="button" onClick={calculateBMI} className="btn btn-success m-2">
          Calculate BMI
        </button>
      </form>

      {c && <p className='alert alert-success'><b>Great!! this is your BMI value : {vbmi} Kg/m²</b></p>}
      <div className='d-flex justify-content-center bg-success'>
      
      {Image && <img src={Image} alt="BMI Category"/>}
      </div>
      
    </div>
  );
}

export default App;
