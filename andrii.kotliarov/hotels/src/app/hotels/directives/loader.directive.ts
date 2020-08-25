import { Directive, TemplateRef, ViewContainerRef, Input, ComponentFactoryResolver,
  ComponentFactory, OnInit, ComponentRef } from '@angular/core';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective implements OnInit {
  private loadingComponentFactory: ComponentFactory<LoadingSpinnerComponent>;
  private loadingComponent: ComponentRef<LoadingSpinnerComponent>;

  @Input()
  public set appLoader(isLoaded: boolean) {
    this.viewContainer.clear();
    if (isLoaded) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.loadingComponent = this.viewContainer.createComponent(this.loadingComponentFactory);
    }
  }

  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
      this.loadingComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingSpinnerComponent);
    }

  public ngOnInit(): void {
  }

}
