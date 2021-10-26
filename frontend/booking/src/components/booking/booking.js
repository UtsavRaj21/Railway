import React, { useState, useEffect } from 'react';
import './bookingStyle.css'
import axios from 'axios';
import Chair from '../chair/chair';

function Booking() {
    const [bookSeat, noOfSeat] = useState(1);
    const [availableSeat, availableSeatNo] = useState(1);
    const [seat, bookedSeat] = useState([]);

    const handleBooking = async () => {
        try {
            if(availableSeat < bookSeat){
                alert("Seat is Not Available");
                return;
            }
            let seatReq = bookSeat;
            let haveSeat = 0;
            let res = [];
            let have = false;
            console.log(seatReq);
            // console.log(res);
            // console.log(seat);
            for(let i = 0 ; i<12;i++){
                haveSeat = 0;
                for(let j = 0;j<7;j++){
                    if(i == 11 && j==3){
                        break;
                    }
                    if(!seat.includes((i*7)+j)){
                        haveSeat++;
                    }
                }
                console.log(res);
                if(haveSeat >= seatReq){
                    for(let j = 0;j<7;j++){
                        if(!seat.includes((i*7)+j)){
                            if(seatReq-->0){
                                seat.push((i*7)+j);
                                res.push((i*7)+j);
                            }
                            
                        }
                    }
                    have = true;
                }
                if(have){
                    break;
                }

            }
            if(!have){
                for(let i = 0 ; i<12;i++){
                    for(let j = 0;j<7;j++){
                        if(!seat.includes((i*7)+j) && seatReq-->0){
                            seat.push((i*7)+j);
                            res.push((i*7)+j);
                        }
                    }
                }
            }
            const data1 = await axios.post("https://railway--backend.herokuapp.com/api/book/set", {
               number:bookSeat
            })
            const data2 = await axios.post("https://railway--backend.herokuapp.com/api/book/add", {
                arr:res
             })

            let seatAvailbale = await axios.get("https://railway--backend.herokuapp.com/api/empty/");
            
            console.log(seatAvailbale.data.user)
            availableSeatNo(seatAvailbale.data.user);
            
            let arr =  await axios.get("https://railway--backend.herokuapp.com/api/book/get");
            console.log(arr.data)
            bookedSeat(arr.data);

            alert(" ticket booked -> Seat Number is " + res);
            window.location.reload(false);

        }
        catch (err) {
            console.log(err);
        }
    }
    const handleReset = async () =>{
        try {
            let seatReset = await axios.post("https://railway--backend.herokuapp.com/api/empty/");
            console.log(seatReset);
            availableSeatNo(80);
            bookedSeat([]);
            window.location.reload(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(async () => {
        console.log("data")
        let data = await axios.get("https://railway--backend.herokuapp.com/api/empty");
        console.log(data)
        console.log(data.data)
        // let data = 10;
        let arr =  await axios.get("https://railway--backend.herokuapp.com/api/book/get");
        // let arr = [1,2,3,4,5];
        console.log(arr.data)
        availableSeatNo(data.data.user);
        bookedSeat(arr.data);
    },[])

    return (
        <div className="booking">
            <div className="section">
                <div className="title">
                    No Of Seats Available  : {availableSeat}
                </div>
                <div className="book-seat">
                    No of Seats books
                    <select class="booking-box" onChange={(e) => noOfSeat(e.target.value)}>
                        <option value={1} selected>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </div>
                <div className="submit">
                     <div className="booking-btn" onClick={handleReset}>Reset</div>
                     <div className="booking-btn" onClick={handleBooking}>Book</div>
                </div>
                <Chair />
            </div>
        </div>
    )
}

export default Booking