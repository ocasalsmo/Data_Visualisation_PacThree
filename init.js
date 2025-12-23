
        


window.onload = async function(){

    // hide instruction

    document.getElementById("InstructionsDiv").style.display = "none";

    // Importing data to javascript
    let Data_2015 = await read_csv("Non_Cancelled_bookings_2015.csv"); 
    let Data_2016 = await read_csv("Non_Cancelled_bookings_2016.csv"); 
    let Data_2017 = await read_csv("Non_Cancelled_bookings_2017.csv"); 


    // Filling corresponding arrays with the data imported in the csv files so we can use it in the plots.
    Data_2015.forEach(row => {

        month['2015'][row.arrival_date_month]["country"].push(row.country)
        month['2015'][row.arrival_date_month]["city"].push(row.city_bookings)
        month['2015'][row.arrival_date_month]["resort"].push(row.resort_bookings)
        month['2015'][row.arrival_date_month]["event"] = row.important_event;

    });

    Data_2016.forEach(row => {

        month['2016'][row.arrival_date_month]["country"].push(row.country)
        month['2016'][row.arrival_date_month]["city"].push(row.city_bookings)
        month['2016'][row.arrival_date_month]["resort"].push(row.resort_bookings)
        month['2016'][row.arrival_date_month]["event"] = row.important_event;

    });

    Data_2017.forEach(row => {

        month['2017'][row.arrival_date_month]["country"].push(row.country)
        month['2017'][row.arrival_date_month]["city"].push(row.city_bookings)
        month['2017'][row.arrival_date_month]["resort"].push(row.resort_bookings)
        month['2017'][row.arrival_date_month]["event"] = row.important_event;

    });

    //console.log(month);
            
    // Selecting month to first display in plot
    let trace1 = {

        x: month['2015']["July"]["country"].slice(0, 20),

        y: month['2015']["July"]["city"].slice(0, 20),

        name: "City Hotel",

        type: 'bar'

    };


    let trace2 = {

        x: month['2015']["July"]["country"].slice(0, 20),

        y: month['2015']["July"]["resort"].slice(0, 20),

        name: "Resort Hotel",

        type: 'bar'

    };


    let data = [trace1, trace2];


    // Creating plot in appropiate div.
    Plotly.newPlot('Barplot_Non_Cancelled_Bookings', data, layout);

    // Adding event to slider

    const slider = document.getElementById('monthSlider');
    
    slider.addEventListener('change', () => {

        console.log(min_months[current_year.toString()]);

        let val = Math.max(slider.value, min_months[current_year.toString()]);
        val = Math.min(val, max_months[current_year.toString()]);
        slider.value = val;

        update_based_on_slider(val - 1);
    });

    update_event_text("July");
}