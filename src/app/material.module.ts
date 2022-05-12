import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    exports:[
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatDividerModule,
        MatButtonToggleModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
    ]
})

export class MaterialModule{

}