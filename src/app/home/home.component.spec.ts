import { TestBed,async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe("HomeComponent",()=>{

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[
                HomeComponent
            ]
        }).compileComponents();
    }));

    it("should create app",async(()=>{
        const fixture=TestBed.createComponent(HomeComponent);
        const home=fixture.debugElement.componentInstance;
        expect(home).toBeTruthy();
    }));

    it("should render title in a h4 tag",async(()=>{
        const fixture=TestBed.createComponent(HomeComponent);
        const compiled=fixture.debugElement.nativeElement;
        expect(compiled.querySelector("h4").textContent).toContain("User Details");
    }));
});