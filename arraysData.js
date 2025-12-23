let month = {
    
    '2015':{
        January: { city: [], resort: [], country: [], event: "" },
        February: { city: [], resort: [], country: [], event: "" },
        March: { city: [], resort: [], country: [], event: "" },
        April: { city: [], resort: [], country: [], event: "" },
        May: { city: [], resort: [], country: [], event: "" },
        June: { city: [], resort: [], country: [], event: "" },
        July: { city: [], resort: [], country: [], event: "" },
        August: { city: [], resort: [], country: [], event: "" },
        September: { city: [], resort: [], country: [], event: "" },
        October: { city: [], resort: [], country: [], event: "" },
        November: { city: [], resort: [], country: [], event: "" },
        December: { city: [], resort: [], country: [], event: "" }
    },
    '2016':{
        January: { city: [], resort: [], country: [], event: "" },
        February: { city: [], resort: [], country: [], event: "" },
        March: { city: [], resort: [], country: [], event: "" },
        April: { city: [], resort: [], country: [], event: "" },
        May: { city: [], resort: [], country: [], event: "" },
        June: { city: [], resort: [], country: [], event: "" },
        July: { city: [], resort: [], country: [], event: "" },
        August: { city: [], resort: [], country: [], event: "" },
        September: { city: [], resort: [], country: [], event: "" },
        October: { city: [], resort: [], country: [], event: "" },
        November: { city: [], resort: [], country: [], event: "" },
        December: { city: [], resort: [], country: [], event: "" }
    },
    '2017':{
        January: { city: [], resort: [], country: [], event: "" },
        February: { city: [], resort: [], country: [], event: "" },
        March: { city: [], resort: [], country: [], event: "" },
        April: { city: [], resort: [], country: [], event: "" },
        May: { city: [], resort: [], country: [], event: "" },
        June: { city: [], resort: [], country: [], event: "" },
        July: { city: [], resort: [], country: [], event: "" },
        August: { city: [], resort: [], country: [], event: "" },
        September: { city: [], resort: [], country: [], event: "" },
        October: { city: [], resort: [], country: [], event: "" },
        November: { city: [], resort: [], country: [], event: "" },
        December: { city: [], resort: [], country: [], event: "" }
    }

};

let months_array = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

current_year = 2015;

min_months = {
    "2015": 7,
    "2016": 1,
    "2017": 1
};

max_months = {
    "2015": 12,
    "2016": 12,
    "2017": 8
};

// Layout of plotly

let layout = {barmode: 'group',

        title: {
            text: `Year ${current_year}`,

            font: {

                family: 'Georgia, "Times New Roman", Times, serif',

                size: 24

            },

            yref: 'paper',
            
        },

        yaxis: {
            range: [0, 900],
            title: {
                text: 'Bookings'
            }
        },

        xaxis: {
            title: {
                text: 'Top 4 countries with more reservations'
            }
        }

};