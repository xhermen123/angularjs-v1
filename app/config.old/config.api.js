angular.module('wayonara.config')

.constant('api', {
    '_LOAD_USER_BASE_DATA': webpackGlobalVars.host + '/api/user/{userId}',
    '_LOAD_USER_FULL_DATA': webpackGlobalVars.host + '/api/userfull/{userId}',
    '_EDIT_PROFILE': webpackGlobalVars.host + '/api/usereditprofile',
    '_SUBSCRIBE': webpackGlobalVars.host + '/api/userregisterprofile',
    '_ADD_SHARDS': webpackGlobalVars.host + '/api/insertshardscollection',
    '_GET_SHARDS': webpackGlobalVars.host + '/api/shards/{selector}',
    '_GET_SHARD_BY_ID': webpackGlobalVars.host + '/api/shard/{shardId}/{selector}',
    '_GET_SHARD_ON_STREAM': webpackGlobalVars.host + '/api/wall/STREAM/{page}',
    '_UPLOAD_AVATAR': webpackGlobalVars.host + '/api/avatarphoto',
    '_LOGIN_INSTAGRAM': webpackGlobalVars.host + '/user/social/instagramlogin',
    '_GET_LANG_FILE': webpackGlobalVars.host + '/api/labels/{lang}',
    '_GET_AUTOCOMPLETE_DATA': webpackGlobalVars.host + '/api/datatoautocomplete/{needle}/{locale}/{bitMask}',
    '_LIKE_SHARD': webpackGlobalVars.host + '/api/like',
    '_FOLLOW': webpackGlobalVars.host + '/api/follow',
    '_UNFOLLOW': webpackGlobalVars.host + '/api/unfollow',
    '_DELETE_SHARD': webpackGlobalVars.host + '/api/deleteshard/{shardId}',
    '_REPORT_SHARD': webpackGlobalVars.host + '/api/reportshard/{shardId}',
    '_BLOCK_USER': webpackGlobalVars.host + '/api/blockprofile',
    '_UNBLOCK_USER': webpackGlobalVars.host + '/api/unblockprofile',
    '_TWITTER_LOGIN': webpackGlobalVars.host + '/api/usersocialtwitterlogin',
    '_PUBLISH_TOUR': webpackGlobalVars.host + '/api/publishtour',
    '_FOLLOWING_PROFILE': webpackGlobalVars.host + '/api/followingprofile',
    '_USERNIDBYUSERNAME': webpackGlobalVars.host + '/api/usernidbyusername/{username}',
    '_FOLLOWED_PROFILE': webpackGlobalVars.host + '/api/followedprofile',
    '_RESULTS': webpackGlobalVars.host + '/api/itinerarysearch',
    '_ITINERARY_RECAP': webpackGlobalVars.host + '/api/itineraryrecap',
    '_ADD_INTERNAL_TOUR_PARTICIPANT': webpackGlobalVars.host + '/api/addinternaltourparticipant',
    '_UPDATE_INTERNAL_TOUR_PARTICIPANT': webpackGlobalVars.host + '/api/updateinternaltourparticipant',
    '_DELETE_INTERNAL_TOUR_PARTICIPANT': webpackGlobalVars.host + '/api/deleteinternaltourparticipant',
    '_ADD_EXTERNAL_TOUR_PARTICIPANT': webpackGlobalVars.host + '/api/addexternaltourparticipant',
    '_UPDATE_EXTERNAL_TOUR_PARTICIPANT': webpackGlobalVars.host + '/api/updateexternaltourparticipant',
    '_DELETE_EXTERNAL_TOUR_PARTICIPANT': webpackGlobalVars.host + '/api/deleteexternaltourparticipant',
    '_ITINERARY_DETAIL': webpackGlobalVars.host + '/api/itinerarydetail',
    '_GET_BOARD_BY_ID': webpackGlobalVars.host + '/api/retrieveboarddetail',
    '_RETRIEVE_BOARDS': webpackGlobalVars.host + '/api/retrieveboards',
    '_PLAN_SHARDS_TO_BOARD': webpackGlobalVars.host + '/api/planshardstoboard',
    '_UPDATE_BOARD': webpackGlobalVars.host + '/api/updateboard',
    '_REMOVE_SHARDS_FROM_BOARDS': webpackGlobalVars.host + '/api/removeplanshardsfromboard',
    '_DELETE_BOARD': webpackGlobalVars.host + '/api/deleteboard/{boardId}',
    '_RETRIEVE_USER_BOARDS': webpackGlobalVars.host + '/api/retrieveboardsforuserdiary',
    '_RETRIEVE_COUNTRIES': webpackGlobalVars.host + '/api/countries/{lang}',
    '_RETRIEVE_BOOKING_REQUIREMENTS': webpackGlobalVars.host + '/api/retrievebookingrequirements',
    '_GET_AWS_SIGNED_URI': webpackGlobalVars.host + '/api/signedurl',
    '_ITINERARY_BOOKING': webpackGlobalVars.host + '/api/itinerarybooking',
    '_RETRIEVE_BOOKINGS_PREVIEW_BY_USER': webpackGlobalVars.host + '/api/retrievebookingspreviewbyuser',
    '_RETRIEVE_BOOKING_DETAIL': webpackGlobalVars.host + '/api/retrievebookingdetail',
    '_RULES_AND_TARIFF_RESTRICTIONS': webpackGlobalVars.host + '/api/rulesandtariffrestrictions',
    tour: webpackGlobalVars.host + '/api/tour/{tourId}',
});
