 <div class="invest-main-left">
    <div class="bid_info mb20 bdr1-e6e6e6 pt40 pl40 pr40 pb30 bg-white">
      <img src="/themes/theme_default/images/wytz_face.png" class="face mr30 mb20">
      {{#with borrow}}
      <dl class="clearfix float_left">
        <dt class="c315A8B">{{name}} <div class="investSchedule"><span>{{scales}}%</span><input type="text" class="knob" value="{{scales}}" /></div></dt>
        <dd class="bid_type">{{borrowDetailsTypeName type}} 借款编号：{{bidNo}}&nbsp;&nbsp;&nbsp;{{#if ../borrowPreview}}<a href="javascript:;" class="protocolPreview">[协议预览]</a>{{/if}}</dd>
        <dd class="bid_intro"> 
          <div class="first"><span><i class="icon money"></i>借款金额</span><br><b class="c315A8B f24">{{moneyFormat account}} <em>元</em></b></div>
          <div class="second"><span><i class="icon pecent"></i>年化利率</span><br><b class="c315A8B f24">{{apr}}<em>%</em></b></div>
          <div class="last"><span><i class="icon clock-gray"></i>借款时间</span><br>{{borrowLimitTime borrowTimeType timeLimit}}</div>
        </dd>
      </dl>
      {{/with}}
      {{#with borrow}}
      <ul class="bdr1-e6e6e6 pt10 pb10 pl20 pr20">
        <li>还款方式　<span>{{transFormatStyle style}}</span></li>
        <li>发布时间　<span>{{startTime}}</span></li>
        <li>单笔最小投标　<span>{{bidLimit lowestAccount}}元</span></li>
        <li>当前状态　<span>{{logBorrowStatusFun status scales type}}</span></li>
        <li>结束时间　<span>{{endTime}}</span></li>
        <li>{{bidMostLimit mostAccount account}}</span></li>
      </ul>
      {{/with}}
    </div>

    <div class="mb20 bdr1-e6e6e6 bg-white">
      <div class="detail-menus clearfix">
        <div class="detail_menus_center">
          <a href="javascript:void(0)" class="a1">借款方详情</a>
          <a href="javascript:void(0)" class="a2">借款描述</a>
          {{#inequality borrow.type 101}}<a href="javascript:void(0)" class="a3">资产监控</a>{{/inequality}}
          <a href="javascript:void(0)" class="a4">借款资料</a>
          <a href="javascript:void(0)" class="a5">投资记录</a>
          <p id="invest_btn" class="js_hide" href="javascript:;">立即投资</p>
        </div>
      </div>
      <div class="invest_detail_content">
      {{#with uc}}
        <div class="borrower-info mb30">
          <h3 class="invest-detail-h3"><i class="icon clip"></i>借款方详情</h3>
          <p>借款企业：{{companyName}}　　<br />公司类型：{{transCompanyType companyType}}　　所属城市：{{province}} {{city}} {{area}}&nbsp;&nbsp;&nbsp;</p>
          <div class="pt20 pl40 pb20">  
            <span title="企业已认证"><i class="icon renzh-1"></i><br>企业认证</span>
            <span title="机构已认证"><i class="icon renzh-2"></i><br>机构认证</span>
            <span title="已添加抵押资料"><i class="icon renzh-3"></i><br>抵押资料</span>
            {{#equal ../size 0}}
            <span title="未添加担保资料"><i class="icon renzh-04"></i><br>担保资料</span>
            {{else}}
            <span title="已添加担保资料"><i class="icon renzh-4"></i><br>担保资料</span>
            {{/equal}}
            {{#if grzxPicPath}}
            <span title="已添加信用报告"><i class="icon renzh-5"></i><br>信用报告</span>
            {{else}}
            <span title="未添加信用报告"><i class="icon renzh-05"></i><br>信用报告</span>
            {{/if}}
          </div>
        </div>
        {{/with}}
        {{#with borrow}}
        <div class="borrow-desc mb30">
          <h3 class="invest-detail-h3"><i class="icon clip"></i>借款描述</h3>
          <div class="pl30 pt20">
            <p style="text-indent:2em">{{borrowDetailContent content}}</p>
          </div>
        </div>
        {{/with}}
      {{#inequality borrow.type 101}}
        <div class="assets-monitor mb30" data-url="{{url}}">
          <h3 class="invest-detail-h3"><i class="icon clip"></i>资产监控</h3>
          <table id="ivest-zcjk-tbl">
            <thead>
              <tr>
                <th>序号</th>
                <th>抵押物</th>
                <th>抵押价</th>
                <th>评估价</th>
                <th>抵押日期</th>
                <th>实物照</th>
                <th>档案照</th>
              </tr>
            </thead>
            <tbody>
            {{#each borrowMortgageList}}
              {{#mortgage_update status -1}}
              <tr>
                <td>{{addOne @index}}</td>
                <td>{{carType}}</td>
                <td>￥{{moneyFormat mortgagePrice}}</td>
                <td>￥{{moneyFormat assessPrice}}</td>
                <td>{{timeMonthFormat addTime}}</td>
                <td><a href="javascript:void(0)" class="objectImg checkImg_js" title="{{carType}}实物照" data-id="{{id}}">查看</a></td>
                <td><a href="javascript:void(0)" class="fileImg checkImg_js" title="{{carType}}档案照" data-id="{{id}}">查看</a></td>
              </tr>
              {{/mortgage_update}}
            {{/each}}
            </tbody>
          </table>
          <div class="count-view">
            <span class="borrow_money_span">
              <i>抵押价总额</i>
              <em>￥{{moneyFormat totalMortgagePrice}}</em>
            </span>
            <span class="span_scale_money">
              <i style="width:{{overPercentWidth borrow.account totalAssessPrice}}%"></i>
              <em></em>
            </span>
            <span class="span_estimated_money">
              <i>评估价总额</i>
              <em>￥{{moneyFormat totalAssessPrice}}</em>
            </span>
            <span>
              <i>超出抵押价</i>
              <em>{{parseInt overPercent}}%</em>
            </span>
            <a href="javascript:void(0)"  class="c315A8B" id="carUpdate_record">监管车源更新记录</a>
          </div>
        </div>
      {{/inequality}}

        <div class="borrow-detail mb30">
          <h3 class="invest-detail-h3"><i class="icon clip"></i>借款资料</h3>
          <div class="tab-menus pt40 pb20">
            <a class="active" href="javascript:void(0)">公司照</a>
            <a href="javascript:void(0)">证件照</a>
            {{#equal size 0}}{{else}}<a href="javascript:void(0)">担保函</a>{{/equal}}
          </div>
          <div class="tab-content" style="display: block;">
            <div class="album">
              <ul class="img-box bdr1-e6e6e6">
              {{#each userUploadlist}}
                <li><a href="{{urlAdd ../url picPath}}" class="fancybox" title="公司照"><img src="{{urlAdd ../url picPath}}" alt="公司照"></a></li>
              {{/each}}
              </ul>
              <a href="javascript:void(0)" class="prev"></a>
              <a href="javascript:void(0)" class="next"></a>
              <ul class="hd">
              {{#each userUploadlist}}
                <li></li>
              {{/each}}
              </ul>
            </div>
          </div>
          <div class="tab-content">
          {{#with uc}}
            <div class="album">
              <ul class="img-box bdr1-e6e6e6">
              {{#if jyzzPicPath}}
                <li><a href="{{urlAdd ../../url jyzzPicPath}}" class="fancybox" title="经营执照图片"><img src="{{urlAdd ../../url jyzzPicPath}}" alt="经营执照图片"></a></li>
              {{/if}}
              {{#if swdjPicPath}}
                <li><a href="{{urlAdd ../../url swdjPicPath}}" class="fancybox" title="税务登记证图片"><img src="{{urlAdd ../../url swdjPicPath}}" alt="税务登记证图片"></a></li>
              {{/if}}
              {{#if zzjgPicPath}}
                <li><a href="{{urlAdd ../../url zzjgPicPath}}" class="fancybox" title="组织机构证图片"><img src="{{urlAdd ../../url zzjgPicPath}}" alt="组织机构证图片"></a></li>
              {{/if}}
              {{#if khxkPicPath}}
                <li><a href="{{urlAdd ../../url khxkPicPath}}" class="fancybox" title="开户许可证图片"><img src="{{urlAdd ../../url khxkPicPath}}" alt="开户许可证图片"></a></li>
              {{/if}}
              {{#if dkkPicPath}}
                <li><a href="{{urlAdd ../../url dkkPicPath}}" class="fancybox" title="贷款卡记录（企业）图片"><img src="{{urlAdd ../../url dkkPicPath}}" alt="贷款卡记录（企业）图片"></a></li>
              {{/if}}
              {{#if grzxPicPath}}
                <li><a href="{{urlAdd ../../url grzxPicPath}}" class="fancybox" title="个人征信报告图片"><img src="{{urlAdd ../../url grzxPicPath}}" alt="个人征信报告图片"></a></li>
              {{/if}}
              </ul>
              <a href="javascript:void(0)" class="prev"></a>
              <a href="javascript:void(0)" class="next"></a>
              <ul class="hd">
                {{#if jyzzPicPath}}
                <li></li>
                {{/if}}
                {{#if swdjPicPath}}
                  <li></li>
                {{/if}}
                {{#if zzjgPicPath}}
                  <li></li>
                {{/if}}
                {{#if khxkPicPath}}
                  <li></li>
                {{/if}}
                {{#if dkkPicPath}}
                  <li></li>
                {{/if}}
                {{#if grzxPicPath}}
                  <li></li>
                {{/if}}
              </ul>
            </div>
          {{/with}}
          </div>
          {{#equal size 0}}
          {{else}}
          <div class="tab-content">
             <div class="album">
              <ul class="img-box bdr1-e6e6e6">
              {{#each borrowUploads}}
                {{#borrowUploadsType type 3}}
                <li><a href="{{urlAdd ../../url picPath}}" class="fancybox" title="担保函"><img src="{{urlAdd ../../url picPath}}" alt="担保函"></a></li>
                {{/borrowUploadsType}}
              {{/each}}
              </ul>
              <a href="javascript:void(0)" class="prev"></a>
              <a href="javascript:void(0)" class="next"></a>
              <ul class="hd">
              {{#each borrowUploads}}
                {{#borrowUploadsType type 3}}
                <li></li>
                {{/borrowUploadsType}}
              {{/each}}
              </ul>
            </div>
          </div>
          {{/equal}}
        </div>
        <div class="invest-record">
          <h3 class="invest-detail-h3"><i class="icon clip"></i>投资记录</h3>
          <table id="invest-txjl-tbl">
            <thead>
              <tr>
                <th>序号</th>
                <th>投资人</th>
                <th>投资金额</th>
                <th>投资时间</th>
                <th>投资方式</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
            {{#if data.list}}
            {{#each data.list}}
              <tr>
                <td>{{addOne @index}}</td>
                <td>{{userName}}</td>
                <td>￥{{money}}</td>
                <td>{{transFormatDate addTime}}</td>
                <td>手动投标</td>
                <td><i class="icon success"></i></td>
              </tr>
            {{/each}}
            {{else}}
            <tr><td colspan="6">暂无投资记录</td></tr>
            {{/if}}
            </tbody>
          </table>
          <div id="kkpager" class="ml20 mr20"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="invest-main-right">
    <div class="mb20 bdr1-e6e6e6 bg-white">
      <h3 class="invest-rightside-h3">投资金额</h3>
      {{#if borrowPreview}}
      {{#equal userStates 20}}
      {{#inequality borrow/scales 100}}
		<div class="amount-form-box pt10 pl30 pr30">
			{{#if borrow.fixedTime}}
			  	<div style="font-size:18px;margin-top:20px;margin-left:50px" class="yomibox" data="{{transFormatDate borrow.fixedTime}}"/>
			{{/if}}
		  	{{#with account}}
		      <div {{#if ../borrow.fixedTime}}style="display:none"{{/if}}>
		        <p class="amount-money">账户充值余额：<b class="c315A8B"><i class="pageUseMoney">{{moneyFormat rechargeUsable}}</i>元</b><br>
		        <p class="amount-money">账户奖励余额：<b class="c315A8B"><i class="pageUseMoney">{{moneyFormat awardUsable}}</i>元</b><br>
		        <p class="amount-money">账户利息余额：<b class="c315A8B"><i class="pageUseMoney">{{moneyFormat interestUsable}}</i>元</b><br>
		        <p class="amount-money">账户回款余额：<b class="c315A8B"><i class="pageUseMoney">{{moneyFormat returnCapitalUsable}}</i>元</b><br>
		        可投金额：<b class="c315A8B">{{moneyFormat ../accountWait}}元</b></p>
		        <form action="/invest/tender.html" name="form1" id="invest_detail_form1" method="post" class="amount-form" onkeydown="if(event.keyCode==13) return false; " autocomplete="off" target="_blank">
		          <div class="form-group">
		              <input type="text" id="money" autocomplete="off" name="money" size="11" onKeyUp="value=value.replace(/[^0-9]/g,'')" placeholder="输入投资金额" />
		          </div>
		          {{#if ../isDirectional}}
		          <div class="form-group">
		              <input type="password" class="isDirectional" autocomplete="off" name="pwd" size="11" placeholder="输入定向密码" />
		          </div>
		          {{/if}}
		          <div class="form-group form_group_tip">请输入投标金额进行投标</div>
		          <div class="form-action">
		            <input type="hidden" id="bid_id" name="id" value="{{../borrow/id}}"/>
		            <input type="button" value="立即投资" class="green-btn sub-invest-btn">
		          </div>
		        </form>
		      </div>
		      {{/with}}
		</div>
      {{else}}
      {{#with borrow}}
      <div class="amount-form-box borrow_full pt10 pl30 pr30">
        <p>投资笔数：<em>{{../data.page.total}}笔</em></p>
        <p>当前状态：<em>{{logBorrowStatusFun status scales type flow}}</em></p>
        <p class="disabled_btn">投资已结束</p>
        <p>欢迎进入<a href="/invest/index.html">投资列表</a>，投资其他借款。</p>
      </div>
      {{/with}}
      <input type="hidden" id="bid_id" value="{{../borrow/id}}" />
      {{/inequality}}
      {{else}}
      <div class="amount-form-box borrow_user_tip pt10 pl30 pr30">
        <dl>
          <dt>对不起！</dt>
          <dd>您当前登录的不是投资账户，不能进行投资。</dd>
        </dl>
        <a class="login_account" href="/member/main.html">进入账户中心</a>
      </div>
      <input type="hidden" id="bid_id" value="{{../borrow/id}}"/>
      {{/equal}}
      {{else}}
      <div class="amount-form-box borrow_user_tip pt10 pl30 pr30">
        <dl>
          <dt>对不起！</dt>
          <dd>此页面为预览页面，不能进行投资。</dd>
        </dl>
      </div>
      <input type="hidden" id="bid_id" value="{{../borrow/id}}" />
      {{/if}}
    </div>
    
    <div class="guarantee mb20 bdr1-e6e6e6 bg-white">
      <h3 class="invest-rightside-h3">担保机构</h3>
      <div class=" pt30 pb35 pl30 pr30">
        <p class="dbjg-logo pb20"><img src="/themes/theme_default/media/bg/db-logo.png" alt="" width="100"></p>
        <h4 class="f16 pb20">浙江安信资产管理（集团）有限公司</h4>
        <p class="f12 desc-txt pb20">浙江安信资产管理集团有限公司是一家专业从事资产管理、金融担保、商品融资、汽车按揭、汽车租赁等业务的综合性金融服务企业。</p>
        <div>     
          <span><i class="icon shield"></i><br>本息担保</span>
          <span><i class="icon clock-blue"></i><br>稳定经营</span>
          <span><i class="icon crown"></i><br>资质优良</span>
        </div>
      </div>
    </div>
    <div class="windControl bg-white bdr1-e6e6e6">
          <h3>风控模型</h3>
            <div class="tab-content" style="display: block;">
              <h4>1、资信评级及尽职调查</h4>
              <p>对借款人进行资信评级，包括借款人的资信状况，收入来源，房产情况调查；对企业尽职调查，企业基本信息，贷款卡记录，及企业资产负债，企业当前状态下的库销比；结合借款人资信情况及企业的营收能力，进行综合授信。实地调查企业经营情况，形成专业的尽职调查报告，结合前期资信评级完成对车商风险调查</p>
              <h4>２、风险分类 </h4>
              <p>根据借款后检查在借项目的动态性风险程度，由低至高，进行五级分类（包括正常类、关注类、次级类、可疑类、损失类）。次级类、可疑类、损失类资产为不良资产</p>
              <h4>3、不定期巡查</h4>
              <p>定期检查与不定期检查；线下公司自查与风控部指定专人检查；可疑情况，联合调查或独立调查、补充检查或复查</p>
              <h4>4、风险预警</h4>
              <p>结合第三方监管机构信息反馈，最早发现借款人风险情况，最快排除资金风险</p>
            </div>
        </div>
  </div>