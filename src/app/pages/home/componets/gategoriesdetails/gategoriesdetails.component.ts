import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatogoreService } from '../../../../shred/sevices/gategoreapi/gatogore.service';
import { Gatogrei } from '../../../../shred/interfacess/gatores/gatogrei';

@Component({
  selector: 'app-gategoriesdetails',
  standalone: true,
  imports: [],
  templateUrl: './gategoriesdetails.component.html',
  styleUrl: './gategoriesdetails.component.css',
})
export class GategoriesdetailsComponent {
  gate!: Gatogrei;
  specificcateg!: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _gatogoreService: GatogoreService
  ) {
    _activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res.id);
        this.specificcateg = res.id;
      },
    });
  }

  ngOnInit(): void {
    this.spicificgat();
  }

  spicificgat() {
    this._gatogoreService.specifiecgate(this.specificcateg).subscribe({
      next: (res) => {
        console.log(res);
        this.gate = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
