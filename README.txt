
STEP 1:
Keep your current UI exactly same.

STEP 2:
Find the old manually written job cards section in index.html

DELETE old repeated cards.

STEP 3:
ADD this where cards should appear:

<div id="dynamic-jobs"></div>

STEP 4:
Before closing </body> add:

<script src="assets/js/dynamic-jobs.js"></script>

STEP 5:
Future workflow:

1. Upload new banner image
2. Add new HTML job page
3. Add ONE entry in:
   data/jobs.json

DONE.

No homepage editing needed anymore.
