export class Doctor{
  findDoctorByKey(keyWord){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${keyWord}&location=47.602194%2C-122.7948136%2C100&user_location=47.602194%2C-122.7948136&sort=distance-asc&skip=0&limit=10&user_key=d2d989dfa3fa5a264415e9de3e6635d4`;
      request.onload = function(){
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send()
    });
  }

  findDoctorByName(name){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.602194%2C-122.7948136%2C100&user_location=47.602194%2C-122.7948136&sort=distance-asc&skip=0&limit=10&user_key=d2d989dfa3fa5a264415e9de3e6635d4`;
      request.onload = function(){
        if(this.status === 200 ) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getAllSpecialties(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=d2d989dfa3fa5a264415e9de3e6635d4 `;
      request.onload = function(){
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  findDoctorBySpecialty(specialty){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${specialty}&location=47.602194%2C-122.7948136%2C100&user_location=47.602194%2C-122.7948136&sort=distance-asc&limit=10&user_key=d2d989dfa3fa5a264415e9de3e6635d4`;
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
