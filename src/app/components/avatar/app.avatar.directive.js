/* global angular */
import unregisteredAvatar	from '../../../../public/svg/avatar/avatar.unregistered.svg!text';
import testAvatar 				from '../../../../public/svg/avatar/avatar.test.svg!text';
import male1Avatar 				from '../../../../public/svg/avatar/avatar.male1.svg!text';


const AVATAR_DIRECTIVE_NAME = 'avatarDir';

function avatarDirective(){
	let directive = {
		restrict 	: 'E',
		scope			: {
			avatarSelected 		: '@',
			userAutenticated 	: '='
		},
		template 	: '<div id="userAvatar" ng-bind-html="avatarUrl"</div>',
		link			: linkFct	
	};
	return directive;
	
	function linkFct(scope, element, attrs){
		scope.avatarUrl =  '';
		
		if(angular.isDefined(scope.avatarSelected)) setAvatarUrl(scope.avatarSelected);
			
		scope.$watch(()=>scope.avatarSelected, (newVal, oldVal)=>{
			if (newVal !== oldVal) setAvatarUrl(newVal);
		});
		
		
		function setAvatarUrl(newAvatar){
			scope.avatarUrl =  '';
			if (scope.userAutenticated){
				if(newAvatar === 'male1')	scope.avatarUrl = male1Avatar;
			}
		}
		
		
	}
	
}

export default avatarDirective;

export {AVATAR_DIRECTIVE_NAME};