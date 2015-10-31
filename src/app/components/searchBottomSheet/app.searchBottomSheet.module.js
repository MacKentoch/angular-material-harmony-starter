/* global angular */
import searchBottomSheetController, {
	SEARCH_BOTTOM_SHEET_CONTROLLER_NAME,
}	from './app.searchBottomSheet.controller';

const SEARCH_BOTTOM_SHEET_MODULE_NAME = 'app.searchBottomSheet.module';

export default angular
								.module(SEARCH_BOTTOM_SHEET_MODULE_NAME, [])
								.controller(SEARCH_BOTTOM_SHEET_CONTROLLER_NAME, searchBottomSheetController);