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
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
        imageUrl: '~/images/export_tasks.PNG',
        animation: 'slide_left'
    },
    {
        title: 'Meeting-Modul',
        description: 'Planen Sie Meetings, teilen Sie Agenda, Protokoll und andere Datieen und laden Sie Kollegen ein.',
        okButtonText: 'Weiter',
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
        imageUrl: '~/images/export_meetings.PNG',
        animation: 'slide_left'
    },
    {
        title: 'Ticket-Modul',
        description: 'Behalten Sie Bugs im Auge und legen Sie Tickets an. Geben Sie Ihren Tickets einen Status und tracken Sie ihre Arbeitszeit.',
        okButtonText: 'Weiter',
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
        imageUrl: '~/images/export_tickets.PNG',
        animation: 'slide_left'
    },
    {
        title: 'Dashboard',
        description: 'Auf dem Dashboard werden Ihnen auf einem Blick die aktuellsten Tasks, Meetings und Tickets angzezeigt.',
        okButtonText: 'Weiter',
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
        imageUrl: '~/images/export_dashboard.PNG',
        animation: 'slide_left'
    },
    {
        title: 'Navigation',
        description: 'Die Navigationsleiste ermöglicht Ihnen ein unkompliziertes Navigieren zwischen den einzelnen Modulen der Applikation.',
        okButtonText: 'Weiter',
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
        imageUrl: '~/images/export_navigation.PNG',
        animation: 'slide_left'
    },
    /*{
        title: 'Easy-Access',
        description: 'Wechseln Sie mithilfe des Easy-Access Features noch schneller zwischen den Modulen. Einfach horizontal swipen.',
        okButtonText: 'Weiter',
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
        imageUrl: '~/images/export.PNG',
        animation: 'slide_left'
    },*/
    {
        title: 'Sie haben das Tutorial abgeschlossen',
        description: 'Fahren Sie jetzt mit Ihren Projekten fort.',
        okButtonText: 'Weiter',
        skipButtonText: 'Überspringen',
        backgroundColor: '#29A699',
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
