<dl class="c_data_title">
<dd style="width:25%">消息内容</dd>
<dd style="width:25%">短信</dd>
<dd style="width:25%">邮箱 {{#equal isEmail 0}}<a style="color:#0697DA;" href="/user/activeEmail.html">请先邮箱认证</a>{{/equal}}</dd>
<dd style="width:25%">站内信</dd>
</dl>
{{#each data.list}}
<dl class="clearfix" style="width:100%">
	<dd style="width:25%">{{name}}</dd>
	<input type="hidden" name="userNoticeConfigs[{{@index}}].nid" value="{{nid}}"/>
	<input type="hidden" name="userNoticeConfigs[{{@index}}].id" value="{{id}}"/>
	<input type="hidden" name="userNoticeConfigs[{{@index}}].user" value="{{user}}"/>
	{{#equal isConfig 1}}
		<dd style="width:25%"><input class="check" name="userNoticeConfigs[{{@index}}].sms" type="checkbox" {{#equal sms 1}}checked="checked" value="1"{{else}}{{#equal sms 2}}disabled="disabled"{{/equal}}{{/equal}}/></dd>
		<dd style="width:25%"><input class="check" name="userNoticeConfigs[{{@index}}].email" type="checkbox" {{#equal email 1}}checked="checked" value="1"{{else}}{{#equal email 2}}disabled="disabled"{{/equal}}{{/equal}}{{#equal ../../isEmail 0}}disabled="disabled"{{/equal}}/></dd>
		<dd style="width:25%"><input class="check" name="userNoticeConfigs[{{@index}}].message" type="checkbox" {{#equal msg 1}}checked="checked" value="1"{{else}}{{#equal msg 2}}disabled="disabled"{{/equal}}{{/equal}}/></dd>
	{{else}}
		<dd style="width:25%"><input class="check" name="userNoticeConfigs[{{@index}}].sms" type="checkbox" {{#equal sms 2}}disabled="disabled"{{/equal}}/></dd>
		<dd style="width:25%"><input class="check" name="userNoticeConfigs[{{@index}}].email" type="checkbox" {{#equal email 2}}disabled="disabled"{{/equal}}{{#equal ../../isEmail 0}}disabled="disabled"{{/equal}}/></dd>
		<dd style="width:25%"><input class="check" name="userNoticeConfigs[{{@index}}].message" type="checkbox" {{#equal msg 2}}disabled="disabled"{{/equal}}/></dd>
	{{/equal}}
</dl>
{{/each}}
<input id="uncSubmit" type="button" value="保存配置" />
