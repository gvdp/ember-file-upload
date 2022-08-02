import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array'

export default class AppImportController extends Controller {
  @tracked
  files = A([])
}