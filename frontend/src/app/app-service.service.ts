import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  readonly ROOT_URL: string;

  /*constructor(private http: HttpClient) {
    if(environment.production == false){
      this.ROOT_URL = 'test'
    }else{
      this.ROOT_URL = 'api'
    }
  }

  initializeDB(){
    return this.http.get(`/${this.ROOT_URL}/dbinitialize`)
  }

  getTeacherData(){
    return this.http.get(`/${this.ROOT_URL}/listTeachers`)
  }

  getStudentData(){
    return this.http.get(`/${this.ROOT_URL}/listStudents`)
  }

  getOneStudentData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload)
  }

  addTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/addTeacher`, payload)
  }

  deleteTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/deleteTeacher`, payload)
  }

  editTeacher(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/editTeacher`, payload)
  }

  editStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/editStudent`, payload)
  }

  addStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/addStudent`, payload)
  }

  deleteStudent(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/deleteStudent`, payload)
  }
}*/
constructor(private http: HttpClient) {
  // Set the base URL based on the environment
  this.ROOT_URL = environment.production ? 'http://localhost:4200/' : 'http://localhost:4200/test/';
}

initializeDB(){
  return this.http.get(`/${this.ROOT_URL}dbinitialize`)
}

getTeacherData(){
  return this.http.get(`/${this.ROOT_URL}listTeachers`)
}

getStudentData(){
  return this.http.get(`/${this.ROOT_URL}listStudents`)
}

getOneStudentData(payload: Object){
  return this.http.post(`/${this.ROOT_URL}getStudentInfo`, payload)
}

getOneTeacherData(payload: Object){
  return this.http.post(`/${this.ROOT_URL}getTeacherInfo`, payload)
}

addTeacher(payload: Object){
  return this.http.post(`/${this.ROOT_URL}addTeacher`, payload)
}

deleteTeacher(payload: Object){
  return this.http.post(`/${this.ROOT_URL}deleteTeacher`, payload)
}

editTeacher(payload: Object){
  return this.http.post(`/${this.ROOT_URL}editTeacher`, payload)
}

editStudent(payload: Object){
  return this.http.post(`/${this.ROOT_URL}editStudent`, payload)
}

addStudent(payload: Object){
  return this.http.post(`/${this.ROOT_URL}addStudent`, payload)
}

deleteStudent(payload: Object){
  return this.http.post(`/${this.ROOT_URL}deleteStudent`, payload)
}