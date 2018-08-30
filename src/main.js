import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './../src/doctorLookup.js';
import 'datatables.net/js/jquery.dataTables.min.js';

$(document).ready(function() {
     $('#output').dataTable( {
        "scrollCollapse": true,
        "info":           true,
        "paging":         true
    } );
} );

$(function () {
  let newDoctor = new Doctor();
  let specialPromise = newDoctor.getAllSpecialties();

  specialPromise.then(function (response){
    let speciality = JSON.parse(response);
    for(let i = 0; i < speciality.data.length; i++){
      $("#specialty").append(`<option value = "${speciality.data[i].uid}">`+
      `${speciality.data[i].name}`
    +"</option>");
    }
  }, function(error) {
    $("#error").html("<p>"+`There was an Error:${error.message}`+"</p>");
  });
  //click to search by  specialty
  $("#bySpecialty").click(function(){
    $("#output").empty();
    let input = $("#specialty").val();
    let newDoctor = new Doctor();
    let findDoc = newDoctor.findDoctorBySpecialty(input);

    findDoc.then(function (response) {
      let doctor = JSON.parse(response);
      if (doctor.data.length != 0) {
        for (let i = 0; i < doctor.data.length; i++) {
          $("#output").append("<tr>" +
            '<td>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + '(' + doctor.data[i].profile.gender + ')' + '</td>' +
            '<td>' + doctor.data[i].practices[0].phones[0].number + '</td>' +
            '<td>' + doctor.data[i].practices[0].visit_address.street + '</td>' +
            '<td>' + doctor.data[i].practices[0].visit_address.city + "," +
            doctor.data[i].practices[0].visit_address.state + " " +
            doctor.data[i].practices[0].visit_address.zip +
            '</td>' +
            '<td>' + "Taking New Patients: " + doctor.data[i].practices[0].accepts_new_patients + '</td>' +
            "</div>"
          );
        }
        $('#output').dataTable();
      } else {
        $("#output").append("<p>" + "No Doctors Meet Criteria" + "</p>");
      }
    }, function (error) {
      $("#error").html("<p>"+`There was an Error: ${error.message}`+"</p>");
    });

  });
  //click to search by Key Word
  $("#bykeyWord").click(function () {
    $("#output").empty();
    let input = $("#userInput").val();
    $("#userInput").val("");

    let newDoctor = new Doctor();
    let promise = newDoctor.findDoctorByKey(input);

    promise.then(function (response) {
      let doctor = JSON.parse(response);
      if (doctor.data.length != 0) {
        for (let i = 0; i < doctor.data.length; i++) {
          $("#output").append("<tr>" +
            '<td>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + ' (' + doctor.data[i].profile.gender + ')' + '</td>' +
            '<td>' + doctor.data[i].practices[0].phones[0].number + '</td>' +
            '<td>' + doctor.data[i].practices[0].visit_address.street + '</td>' +
            '<td>' + doctor.data[i].practices[0].visit_address.city + "," +
            doctor.data[i].practices[0].visit_address.state + " " +
            doctor.data[i].practices[0].visit_address.zip +
            '</td>' +
            '<td>' + "Accepting new Patients: " + doctor.data[i].practices[0].accepts_new_patients + '</td>' +
            "</div>"
          );
        }
        $('#output').dataTable();
      } else {
        $("#output").append("<p>" + "No Doctors Meet Criteria" + "</p>");
      }
    }, function (error) {
      $("#error").html("<p>"+`There was an Error: ${error.message}`+"</p>");
    });
  });

  //click to search by Name
  $("#byname").click(function () {
    $("#output").empty();
    let input = $("#userInput").val();
    $("#userInput").val("");

    let newDoctor = new Doctor();
    let namePromise = newDoctor.findDoctorByName(input);

    namePromise.then(function (response) {
      let doctor = JSON.parse(response);
      if(doctor.data.length != 0) {
        for (let i = 0; i < doctor.data.length; i++) {
          console.log(doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name);
          $("#output").append("<tr>" +
            '<td>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + '(' + doctor.data[i].profile.gender + ')' + '</td>' +
            '<td>' + doctor.data[i].practices[0].phones[0].number + '</td>' +
            '<td>' + doctor.data[i].practices[0].visit_address.street + '</td>' +
            '<td>' + doctor.data[i].practices[0].visit_address.city + "," +
            doctor.data[i].practices[0].visit_address.state + " " +
            doctor.data[i].practices[0].visit_address.zip +
            '</td>' +
            '<td>' + "Accepting new Patients: " + doctor.data[i].practices[0].accepts_new_patients + '</td>' +
            "</div>"
          );
        }
        $('#output').dataTable();
      } else {
        $("#output").append("<p>" + "No Doctors Meet Criteria" + "</p>");
      }
    }, function (error) {
      $("#error").html("<p>"+`There was an Error: ${error.message}`+"</p>");
    });
  });
});
