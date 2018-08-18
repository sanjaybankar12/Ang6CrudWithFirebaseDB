import { TestBed,async } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe("UserComponent",()=>{
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[
                UserComponent
            ]
        }).compileComponents();
    }));

    it('should create user',async(()=>{
        const fixture=TestBed.createComponent(UserComponent);
        const user=fixture.debugElement.componentInstance;

        expect(user).toBeTruthy();
    }));

    it('should render title in a h4 tag',async(()=>{
        const fixture=TestBed.createComponent(UserComponent);
        const compiled=fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h4').textContent).toContain('User Details');
    }));
});