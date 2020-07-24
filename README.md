# Wetube__clone
 
 
 Wetube__clone ver.2


## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail  
- [ ] Edit Profile
- [ ] Change password
- [ ] Upload 
- [ ] Video Detail
- [ ] Edit Video

*********************heroku 이용시 json 변경사항 **************

window  용은 "prebuild": "rd /s build" , heroku에 배포할땐 "rm -rf build"
window용 "copyAll": "xcopy .\\src\\static .\\build\\static\\ /s /y && xcopy .\\src\\views .\\build\\views\\ /s /y"
heroku용 "copyAll": "cp -R src/static build, cp -R src/views build" 

******************************************************************