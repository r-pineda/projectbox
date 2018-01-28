import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'pb-tutorial',
  templateUrl: 'pages/tutorial/tutorial.html',
})
export class TutorialComponent implements OnInit {
slides = [
    {
        title: 'Task-Modul',
        description: 'Legen Sie Tasks an, bestimmen Sie Deadlines, weisen Sie Verantwortliche zu, oder tracken Sie ihre eigene Arbeitszeit.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl: '~/images/tutorial_1.png',
        animation: 'slide_left'
    },
    {
        title: 'Meeting-Modul',
        description: 'Planen Sie Meetings, teilen Sie Agenda, Protokoll und andere Datieen und laden Sie Kollegen ein.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl: '~/images/tutorial_2.png',
        animation: 'slide_left'
    },
    {
        title: 'Ticket-Modul',
        description: 'Behalten Sie Bugs im Auge und legen Sie Tickets an. Geben Sie Ihren Tickets einen Status und tracken Sie ihre Arbeitszeit.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl: '~/images/tutorial_3.png',
        animation: 'slide_left'
    },
    {
        title: 'Dashboard',
        description: 'Auf dem Dashboard werden Ihnen auf einem Blick die aktuellsten Tasks, Meetings und Tickets angzezeigt.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl:  '~/images/tutorial_4.png',
        animation: 'slide_left'
    },
    {
        title: 'Navigation',
        description: 'Die Navigationsleiste ermöglicht Ihnen ein unkompliziertes Navigieren zwischen den einzelnen Modulen der Applikation.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl:  '~/images/tutorial_5.png',
        animation: 'slide_left'
    },
    {
        title: 'Easy-Access',
        description: 'Wechseln Sie mithilfe des Easy-Access Features noch schneller zwischen den Modulen. Einfach horizontal swipen.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl:  '~/images/tutorial_6.png',
        animation: 'slide_left'
    },
    {
        title: 'Easy-Access',
        description: 'Wechseln Sie mithilfe des Easy-Access Features noch schneller zwischen den Modulen. Einfach horizontal swipen.',
        okButtonText: 'Weiter',
        backgroundColor: '#29A699',
        imageUrl:  '~/images/tutorial_7.png',
        animation: 'slide_left'
    }
];
    
  constructor(private router: Router,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,) { }

  finish() {
      this.routerExtensions.navigate(["/nav"], {
      transition: {
          name: "slide",
          curve: "easeOut"
      }
  });
  }

  ngOnInit() { }

}
