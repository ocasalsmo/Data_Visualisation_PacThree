async function read_csv(csv_path){

    /*
    Import csv to javascript
    */
            
    const response = await fetch(csv_path);
            
    const text = await response.text();
            
    const data = await $.csv.toObjects(text);

    return data;
}

function update_plot(m, year){
    /*
    Update data shown in plot.
    */

    let trace1 = {

        x: month[year][m]["country"].slice(0, 4),

        y: month[year][m]["city"].slice(0, 4),

        name: "City Hotel",

        type: 'bar'

    };


    let trace2 = {

        x: month[year][m]["country"].slice(0, 4),

        y: month[year][m]["resort"].slice(0, 4),

        name: "Resort Hotel",

        type: 'bar'

    };


    let data = [trace1, trace2];


    //let layout = {barmode: 'group'};

    layout.title.text = `Year ${current_year}`;

    Plotly.animate("Barplot_Non_Cancelled_Bookings",
        {
            data: data,

            layout: layout
        }, 
        {
            transition: {

                duration: 500,

                easing: 'cubic-in-out'

            },

            frame: {

                duration: 500

            }

        }
    );
}

function update_event_text(m){
    let e = month[current_year.toString()][m]["event"];
    console.log("Event:", e);
    document.getElementById("EventDescription").innerHTML = e;
}

function update_based_on_slider(month_index){
    /*
    Update plot as slider moves.
    */

    let selected_month = months_array[month_index];

    let year_selected = current_year.toString();

    console.log(year_selected);

    update_plot(selected_month, year_selected);

    update_event_text(selected_month);

}

function increaseYear(){
    /*
    Increase year
    */
    current_year += 1;
    current_year = Math.min(current_year, 2017);

    let year_selected = current_year.toString();

    let lower_month = months_array[min_months[current_year.toString()] - 1];

    update_plot(
        lower_month,
        year_selected
    );

    const slider = document.getElementById('monthSlider').value = min_months[current_year.toString()];

    update_event_text(lower_month);

}

function decreaseYear(){
    /*
    Decrease year
    */
    current_year -= 1;
    current_year = Math.max(current_year, 2015);

    let year_selected = current_year.toString();

    let lower_month = months_array[min_months[current_year.toString()] - 1];

    update_plot(
        lower_month,
        year_selected
    );

    const slider = document.getElementById('monthSlider').value = min_months[current_year.toString()];

    update_event_text(lower_month);
}


function showInstructions(){
    /*
    Show Instructions on how to use the plot
    */
    let DivIns = document.getElementById("InstructionsDiv");

    if (DivIns.style.display == "none"){
        DivIns.style.display = "block";
    }else{
        DivIns.style.display = "none";
    }
}

