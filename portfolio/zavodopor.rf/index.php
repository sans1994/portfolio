<?
require_once('crest.php');
$sName = htmlspecialchars($_POST["NAME"]);
$sTitle = htmlspecialchars($_POST["TITLE"]);
$sPhone = htmlspecialchars($_POST["PHONE"]);
$sEmail = htmlspecialchars($_POST["EMAIL"]);
$sComments = htmlspecialchars($_POST["COMMENTS"]);
$sData = htmlspecialchars($_POST["utm_source"]);
$sContent = htmlspecialchars($_POST["utm_content"]);
$sCampaign = htmlspecialchars($_POST["utm_campaign"]);
$sTerm = htmlspecialchars($_POST["utm_term"]);
	
//Форматируем телефон и почту для сохранения
$arPhone = (!empty($sPhone)) ? array(array('VALUE' => $sPhone, 'VALUE_TYPE' => 'WORK')) : array();
$arEmail = (!empty($sEmail)) ? array(array('VALUE' => $sEmail, 'VALUE_TYPE' => 'HOME')) : array();
// put an example below
echo '<PRE>';
print_r(CRest::call(
   'crm.lead.add',
   [
      'fields' =>[
		'TITLE' => $sTitle,
		'NAME' => $sName,//Name[string]
		'PHONE' => $arPhone,//Phone[crm_multifield]
		'EMAIL' => $arEmail,//E-mail[crm_multifield]
      'COMMENTS' => $sComments,//E-mail[crm_multifield]
      'UTM_SOURCE' => $sData,
      'UTM_CONTENT' => $sContent,
      'UTM_CAMPAIGN' => $sCampaign,
      'UTM_TERM' => $sTerm,
      ]
   ])
);

echo '</PRE>';