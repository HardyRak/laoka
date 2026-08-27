import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IonContent, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-dish-detail-modal',
  standalone: true,
  imports: [IonModal, CommonModule, IonModal, IonContent],
  templateUrl: './dish-detail-modal.component.html',
  styleUrls: ['./dish-detail-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishDetailModalComponent {
  @ViewChild('modal') private modal!: IonModal;

  /** À appeler depuis le parent (ex: au clic sur un jour du calendrier) */
  present(): void {
    void this.modal.present();
  }

  dismiss(): void {
    void this.modal.dismiss();
  }
}
