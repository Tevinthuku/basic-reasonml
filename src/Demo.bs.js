// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';


var action = "Keep on going";

var myweapon = /* Arrows */[12];

var useweapon;

if (myweapon) {
  var switcher = 11;
  useweapon = switcher > 2 || switcher < 0 ? (
      switcher !== -1 ? String(12) + " Are remaining" : "Switch to a sword"
    ) : (
      switcher !== 0 ? "Your arrows are running out" : "Save it for later"
    );
} else {
  useweapon = "Live and die by the sword";
}

var areYouReading = /* Yes */0;

exports.areYouReading = areYouReading;
exports.action = action;
exports.myweapon = myweapon;
exports.useweapon = useweapon;
/* useweapon Not a pure module */
