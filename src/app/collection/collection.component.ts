import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitData(router){
    console.log(user);
  console.log(farmer, produce, quantity, cost );

  var details = new db(farmer, produce, quantity, cost, type);
  console.log(details);

    if (farmer !== "" && produce !== "" && quantity !== "" && cost !== "" && type !== "") {
      console.log(farmer);
      if (user) {
        firebase.database().ref().child(user.displayName).push().set(details,
        function(error) {
          if (error) {
            document.getElementById('emsg').textContent = "Failed to push data!";
            document.getElementById('error').style.display = "block";
          }
          else {
            document.getElementById('success').style.display = "block";
          }
        });
        setTimeout(hide, 5000);
      }
      else {
        alert("An unexpected error occured!\nplease login again to continue");
        this.router.navigateByUrl('register');
      }
    }
    else {
      document.getElementById('error').style.display = "block";
    }
  }

}
