import React, { useState, useEffect } from 'react';
import './chair.css'
import axios from 'axios';

function Chair() {
    const [seat, bookedSeat] = useState([]);
    useEffect(async () => {
        let arr = await axios.get("https://railway--backend.herokuapp.com/api/book/get");
        bookedSeat(arr.data);
    }, [])

    return (
        <div className="chair-section">
            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(0)? "red" :"white"}}>0</div>
                <div className="col" style={{ backgroundColor: seat.includes(1)? "red" :"white"}}>1</div>
                <div className="col" style={{ backgroundColor: seat.includes(2)? "red" :"white"}}>2</div>
                <div className="col" style={{ backgroundColor: seat.includes(3)? "red" :"white"}}>3</div>
                <div className="col" style={{ backgroundColor: seat.includes(4)? "red" :"white"}}>4</div>
                <div className="col" style={{ backgroundColor: seat.includes(5)? "red" :"white"}}>5</div>
                <div className="col" style={{ backgroundColor: seat.includes(6)? "red" :"white"}}>6</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(7)? "red" :"white"}}>7</div>
                <div className="col" style={{ backgroundColor: seat.includes(8)? "red" :"white"}}>8</div>
                <div className="col" style={{ backgroundColor: seat.includes(9)? "red" :"white"}}>9</div>
                <div className="col" style={{ backgroundColor: seat.includes(10)? "red" :"white"}}>10</div>
                <div className="col" style={{ backgroundColor: seat.includes(11)? "red" :"white"}}>11</div>
                <div className="col" style={{ backgroundColor: seat.includes(12)? "red" :"white"}}>12</div>
                <div className="col" style={{ backgroundColor: seat.includes(13)? "red" :"white"}}>13</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(14)? "red" :"white"}}>14</div>
                <div className="col" style={{ backgroundColor: seat.includes(15)? "red" :"white"}}>15</div>
                <div className="col" style={{ backgroundColor: seat.includes(16)? "red" :"white"}}>16</div>
                <div className="col" style={{ backgroundColor: seat.includes(17)? "red" :"white"}}>17</div>
                <div className="col" style={{ backgroundColor: seat.includes(18)? "red" :"white"}}>18</div>
                <div className="col" style={{ backgroundColor: seat.includes(19)? "red" :"white"}}>19</div>
                <div className="col" style={{ backgroundColor: seat.includes(20)? "red" :"white"}}>20</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(21)? "red" :"white"}}>21</div>
                <div className="col" style={{ backgroundColor: seat.includes(22)? "red" :"white"}}>22</div>
                <div className="col" style={{ backgroundColor: seat.includes(23)? "red" :"white"}}>23</div>
                <div className="col" style={{ backgroundColor: seat.includes(24)? "red" :"white"}}>24</div>
                <div className="col" style={{ backgroundColor: seat.includes(25)? "red" :"white"}}>25</div>
                <div className="col" style={{ backgroundColor: seat.includes(26)? "red" :"white"}}>26</div>
                <div className="col" style={{ backgroundColor: seat.includes(27)? "red" :"white"}}>27</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(28)? "red" :"white"}}>28</div>
                <div className="col" style={{ backgroundColor: seat.includes(29)? "red" :"white"}}>29</div>
                <div className="col" style={{ backgroundColor: seat.includes(30)? "red" :"white"}}>30</div>
                <div className="col" style={{ backgroundColor: seat.includes(31)? "red" :"white"}}>31</div>
                <div className="col" style={{ backgroundColor: seat.includes(32)? "red" :"white"}}>32</div>
                <div className="col" style={{ backgroundColor: seat.includes(33)? "red" :"white"}}>33</div>
                <div className="col" style={{ backgroundColor: seat.includes(34)? "red" :"white"}}>34</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(35)? "red" :"white"}}>35</div>
                <div className="col" style={{ backgroundColor: seat.includes(36)? "red" :"white"}}>36</div>
                <div className="col" style={{ backgroundColor: seat.includes(37)? "red" :"white"}}>37</div>
                <div className="col" style={{ backgroundColor: seat.includes(38)? "red" :"white"}}>38</div>
                <div className="col" style={{ backgroundColor: seat.includes(39)? "red" :"white"}}>39</div>
                <div className="col" style={{ backgroundColor: seat.includes(40)? "red" :"white"}}>40</div>
                <div className="col" style={{ backgroundColor: seat.includes(41)? "red" :"white"}}>41</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(42)? "red" :"white"}}>42</div>
                <div className="col" style={{ backgroundColor: seat.includes(43)? "red" :"white"}}>43</div>
                <div className="col" style={{ backgroundColor: seat.includes(44)? "red" :"white"}}>44</div>
                <div className="col" style={{ backgroundColor: seat.includes(45)? "red" :"white"}}>45</div>
                <div className="col" style={{ backgroundColor: seat.includes(46)? "red" :"white"}}>46</div>
                <div className="col" style={{ backgroundColor: seat.includes(47)? "red" :"white"}}>47</div>
                <div className="col" style={{ backgroundColor: seat.includes(48)? "red" :"white"}}>48</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(49)? "red" :"white"}}>49</div>
                <div className="col" style={{ backgroundColor: seat.includes(50)? "red" :"white"}}>50</div>
                <div className="col" style={{ backgroundColor: seat.includes(51)? "red" :"white"}}>51</div>
                <div className="col" style={{ backgroundColor: seat.includes(52)? "red" :"white"}}>52</div>
                <div className="col" style={{ backgroundColor: seat.includes(53)? "red" :"white"}}>53</div>
                <div className="col" style={{ backgroundColor: seat.includes(54)? "red" :"white"}}>54</div>
                <div className="col" style={{ backgroundColor: seat.includes(55)? "red" :"white"}}>55</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(56)? "red" :"white"}}>56</div>
                <div className="col" style={{ backgroundColor: seat.includes(57)? "red" :"white"}}>57</div>
                <div className="col" style={{ backgroundColor: seat.includes(58)? "red" :"white"}}>58</div>
                <div className="col" style={{ backgroundColor: seat.includes(59)? "red" :"white"}}>59</div>
                <div className="col" style={{ backgroundColor: seat.includes(60)? "red" :"white"}}>60</div>
                <div className="col" style={{ backgroundColor: seat.includes(61)? "red" :"white"}}>61</div>
                <div className="col" style={{ backgroundColor: seat.includes(62)? "red" :"white"}}>62</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(63)? "red" :"white"}}>63</div>
                <div className="col" style={{ backgroundColor: seat.includes(64)? "red" :"white"}}>64</div>
                <div className="col" style={{ backgroundColor: seat.includes(65)? "red" :"white"}}>65</div>
                <div className="col" style={{ backgroundColor: seat.includes(66)? "red" :"white"}}>66</div>
                <div className="col" style={{ backgroundColor: seat.includes(67)? "red" :"white"}}>67</div>
                <div className="col" style={{ backgroundColor: seat.includes(68)? "red" :"white"}}>68</div>
                <div className="col" style={{ backgroundColor: seat.includes(69)? "red" :"white"}}>69</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(70)? "red" :"white"}}>70</div>
                <div className="col" style={{ backgroundColor: seat.includes(71)? "red" :"white"}}>71</div>
                <div className="col" style={{ backgroundColor: seat.includes(72)? "red" :"white"}}>72</div>
                <div className="col" style={{ backgroundColor: seat.includes(73)? "red" :"white"}}>73</div>
                <div className="col" style={{ backgroundColor: seat.includes(74)? "red" :"white"}}>74</div>
                <div className="col" style={{ backgroundColor: seat.includes(75)? "red" :"white"}}>75</div>
                <div className="col" style={{ backgroundColor: seat.includes(76)? "red" :"white"}}>76</div>
            </div>

            <div className="row">
                <div className="col" style={{ backgroundColor: seat.includes(77)? "red" :"white"}}>77</div>
                <div className="col" style={{ backgroundColor: seat.includes(78)? "red" :"white"}}>78</div>
                <div className="col" style={{ backgroundColor: seat.includes(79)? "red" :"white"}}>79</div>
            </div>

            <div className="row">
                <div className="col1" style={{ backgroundColor: "red" }}>  Occupied Seat</div>
                <div className="col1" style={{ backgroundColor: "white",color: 'black'}}> Available Seat</div>
               
            </div>

        </div>
    )
}

export default Chair