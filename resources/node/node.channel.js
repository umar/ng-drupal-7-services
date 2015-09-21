;(function() {
	'use strict';

	/**
	 * Node Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.node.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.node.channelConstant'])
		   .factory('NodeChannel', NodeChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	NodeChannel.$inject = [ 'BaseChannel', 'NodeChannelConstant' ];
	
	/**
	 * Notification channel for node resource 
	**/
	
	/** @ngInject */
	function NodeChannel(BaseChannel, NodeChannelConstant) {
	
		//setup and return service            	
        var nodeChannelService = {
        		
        	//node retrieve request
    		pubRetrieveConfirmed 	: pubRetrieveConfirmed,
    		subRetrieveConfirmed	: subRetrieveConfirmed,
    		pubRetrieveFailed 		: pubRetrieveFailed,
    		subRetrieveFailed		: subRetrieveFailed,
    		
        	//node create request
        	pubCreateConfirmed 		: pubCreateConfirmed,
        	subCreateConfirmed		: subCreateConfirmed,
        	pubCreateFailed 		: pubCreateFailed,
        	subCreateFailed			: subCreateFailed,
        	
        	//node update request
        	pubUpdateConfirmed 		: pubUpdateConfirmed,
        	subUpdateConfirmed		: subUpdateConfirmed,
        	pubUpdateFailed 		: pubUpdateFailed,
        	subUpdateFailed			: subUpdateFailed,
        	
        	//node delete request
        	pubDeleteConfirmed 		: pubDeleteConfirmed,
        	subDeleteConfirmed		: subDeleteConfirmed,
        	pubDeleteFailed 		: pubDeleteFailed,
        	subDeleteFailed			: subDeleteFailed,
        	
        	//node index request
        	pubIndexConfirmed 		: pubIndexConfirmed,
        	subIndexConfirmed		: subIndexConfirmed,
        	pubIndexFailed 			: pubIndexFailed,
        	subIndexFailed			: subIndexFailed,
        	
        	// Files action
     	   	pubNodeFilesConfirmed		: pubNodeFilesConfirmed,
     	   	subNodeFilesConfirmed		: subNodeFilesConfirmed,
     	   	pubNodeFilesFailed			: pubNodeFilesFailed,
     	   	subNodeFilesFailed 			: subNodeFilesFailed,
     	   	
     	   	// Comments action
     	   	pubNodeCommentsConfirmed	: pubNodeCommentsConfirmed,
     	   	subNodeCommentsConfirmed	: subNodeCommentsConfirmed,
     	   	pubNodeCommentsFailed		: pubNodeCommentsFailed,
     	   	subNodeCommentsFailed 		: subNodeCommentsFailed,
     	   	
     	   	// Attachfile action
     	   	pubNodeAttachFileConfirmed	: pubNodeAttachFileConfirmed,
     	   	subNodeAttachFileConfirmed	: subNodeAttachFileConfirmed,
     	   	pubNodeAttachFileFailed		: pubNodeAttachFileFailed,
     	   	subNodeAttachFileFailed 	: subNodeAttachFileFailed

        };
        
        return nodeChannelService;

        ////////////
        
        //Node retrieve request functions
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the NodeRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveConfirmed(args) {
    		var args = args;
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_retrieveConfirmed, args);
    	};
    	
    	/**
		 * subRetrieveConfirmed
		 * 
		 * subscribe for the NodeRetrieveConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveConfirmed function
		 * @param 	{function} scopeHandler The callback handler for NodeRetrieveConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_retrieveConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubRetrieveConfirmed
		 * 
		 * Publish the NodeRetrieveConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubRetrieveFailed(args) {
    		var args = {errors: args};
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_retrieveFailed, args);
    	};
    	
    	/**
		 * subRetrieveFailed
		 * 
		 * subscribe for the NodeRetrieveFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subRetrieveFailed function
		 * @param 	{function} scopeHandler The callback handler for NodeRetrieveFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subRetrieveFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_retrieveFailed, _Scope, scopeHandler, prepArgs);

    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Node create request functions

    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the NodeCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateConfirmed(args) {
    		var args = args;
    		console.log('channel pubCreateConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_createConfirmed, args);
    	};

    	/**
    	 * subCreateConfirmed
    	 * 
    	 * subscribe for the NodeCreateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCreateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_createConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubCreateConfirmed
    	 * 
    	 * Publish the NodeCreateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCreateFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubCreateFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_createFailed, args);
    	};

    	/**
    	 * subCreateFailed
    	 * 
    	 * subscribe for the NodeCreateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCreateFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCreateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCreateFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_createFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Node update request functions

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the NodeUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateConfirmed(args) {
    		var args = args;
    		console.log('channel pubUpdateConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_updateConfirmed, args);
    	};

    	/**
    	 * subUpdateConfirmed
    	 * 
    	 * subscribe for the NodeUpdateConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeUpdateConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_updateConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############

    	/**
    	 * pubUpdateConfirmed
    	 * 
    	 * Publish the NodeUpdateConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubUpdateFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubUpdateFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_updateFailed, args);
    	};

    	/**
    	 * subUpdateFailed
    	 * 
    	 * subscribe for the NodeUpdateFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subUpdateFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeUpdateFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subUpdateFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_updateFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Node delete request functions

    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the NodeDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteConfirmed(args) {
    		var args = args;
    		console.log('channel pubDeleteConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_deleteConfirmed, args);
    	};

    	/**
    	 * subDeleteConfirmed
    	 * 
    	 * subscribe for the NodeDeleteConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeDeleteConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_deleteConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubDeleteConfirmed
    	 * 
    	 * Publish the NodeDeleteConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubDeleteFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubDeleteFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_deleteFailed, args);
    	};

    	/**
    	 * subDeleteFailed
    	 * 
    	 * subscribe for the NodeDeleteFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subDeleteFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeDeleteFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subDeleteFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_deleteFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________

    	//Node index request functions

    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the NodeIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexConfirmed(args) {
    		var args = args;
    		console.log('channel pubIndexConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_indexConfirmed, args);
    	};

    	/**
    	 * subIndexConfirmed
    	 * 
    	 * subscribe for the NodeIndexConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeIndexConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_indexConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubIndexConfirmed
    	 * 
    	 * Publish the NodeIndexConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubIndexFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubIndexFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_indexFailed, args);
    	};

    	/**
    	 * subIndexFailed
    	 * 
    	 * subscribe for the NodeIndexFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subIndexFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeIndexFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subIndexFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_indexFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
    	//Node files request functions

    	/**
    	 * pubFilesConfirmed
    	 * 
    	 * Publish the NodeFilesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubFilesConfirmed(args) {
    		var args = args;
    		console.log('channel pubFilesConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_filesConfirmed, args);
    	};

    	/**
    	 * subFilesConfirmed
    	 * 
    	 * subscribe for the NodeFilesConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subFilesConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeFilesConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subFilesConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_filesConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubFilesConfirmed
    	 * 
    	 * Publish the NodeFilesConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubFilesFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubFilesFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_filesFailed, args);
    	};

    	/**
    	 * subFilesFailed
    	 * 
    	 * subscribe for the NodeFilesFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subFilesFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeFilesFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subFilesFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_filesFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	

    	//Node comments request functions

    	/**
    	 * pubCommentsConfirmed
    	 * 
    	 * Publish the NodeCommentsConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCommentsConfirmed(args) {
    		var args = args;
    		console.log('channel pubCommentsConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_commentsConfirmed, args);
    	};

    	/**
    	 * subCommentsConfirmed
    	 * 
    	 * subscribe for the NodeCommentsConfirmed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCommentsConfirmed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCommentsConfirmed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCommentsConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_commentsConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	 * pubCommentsConfirmed
    	 * 
    	 * Publish the NodeCommentsConfirmed event with giver args 
    	 *
    	 * @param 	{Object} args The events arguments 
    	 * 
    	 * 
    	**/
    	function pubCommentsFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubCommentsFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_commentsFailed, args);
    	};

    	/**
    	 * subCommentsFailed
    	 * 
    	 * subscribe for the NodeCommentsFailed event
    	 *
    	 * @param 	{Object} _Scope The scope that calls the channels subCommentsFailed function
    	 * @param 	{function} scopeHandler The callback handler for NodeCommentsFailed event
    	 * 
    	 * @return 	{function} The unsubscribe function from the $rootScope.on() call
    	 * 
    	**/
    	function subCommentsFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_commentsFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	


    	//Node attachFile request functions

    	/**
    	* pubAttachFileConfirmed
    	* 
    	* Publish the NodeAttachFileConfirmed event with giver args 
    	*
    	* @param 	{Object} args The events arguments 
    	* 
    	* 
    	**/
    	function pubAttachFileConfirmed(args) {
    		var args = args;
    		console.log('channel pubAttachFileConfirmed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_attachFileConfirmed, args);
    	};

    	/**
    	* subAttachFileConfirmed
    	* 
    	* subscribe for the NodeAttachFileConfirmed event
    	*
    	* @param 	{Object} _Scope The scope that calls the channels subAttachFileConfirmed function
    	* @param 	{function} scopeHandler The callback handler for NodeAttachFileConfirmed event
    	* 
    	* @return 	{function} The unsubscribe function from the $rootScope.on() call
    	* 
    	**/
    	function subAttachFileConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_attachFileConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//###############


    	/**
    	* pubAttachFileConfirmed
    	* 
    	* Publish the NodeAttachFileConfirmed event with giver args 
    	*
    	* @param 	{Object} args The events arguments 
    	* 
    	* 
    	**/
    	function pubAttachFileFailed(args) {
    		var args = {errors: args};
    		console.log('channel pubAttachFileFailed'); 
    		BaseChannel.pubRootEmit(NodeChannelConstant.node_attachFileFailed, args);
    	};

    	/**
    	* subAttachFileFailed
    	* 
    	* subscribe for the NodeAttachFileFailed event
    	*
    	* @param 	{Object} _Scope The scope that calls the channels subAttachFileFailed function
    	* @param 	{function} scopeHandler The callback handler for NodeAttachFileFailed event
    	* 
    	* @return 	{function} The unsubscribe function from the $rootScope.on() call
    	* 
    	**/
    	function subAttachFileFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( NodeChannelConstant.node_attachFileFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};

    	//________________________________________________________________________________________________________________________________________
    	
	};

})();